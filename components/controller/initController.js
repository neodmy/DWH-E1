module.exports = () => {
	const start = async ({ logger, store }) => {
		logger.info('Starting controller component');
		const { metadata, objective, register } = store;


		await register.initStore();
		await objective.initStore();

		const dropQueries = await metadata.dropAllTablesQueries();
		const createQueries = await metadata.createAllTablesQueries();

		const snapshotBefore = () => {
			logger.info('controller | taking snapshot before query');
			return Promise.all(Object.keys(metadata.informationSchemaTables)
				.map(async tableName => {
					const table = metadata.informationSchemaTables[tableName];
					logger.info(`metadata store | select all data from information_schema.${tableName}`);
					const data = await table.select();
					logger.info(`register store | inserting data (${data.length} rows) into register.${tableName}_BEFORE`);
					const insertQuery = await table.insert();
					await register.executeInsertBefore(insertQuery.before, data);
				}));
		};

		const snapshotAfter = () => {
			logger.info('controller | taking snapshot after query');
			return Promise.all(Object.keys(metadata.informationSchemaTables)
				.map(async tableName => {
					const table = metadata.informationSchemaTables[tableName];
					logger.info(`metadata store | select all data from information_schema.${tableName}`);
					const data = await table.select();
					logger.info(`register store | inserting data (${data.length} rows) into register.${tableName}_AFTER`);
					const insertQuery = await table.insert();
					await register.executeInsertBefore(insertQuery.after, data);
				}));
		};

		const cleanRegisterTables = async () => {
			logger.info('controller | cleaning register tables');
			await register.executeDrop(dropQueries);
			await register.executeCreate(createQueries);
		};

		const recordMetadata = async query => {
			await cleanRegisterTables();
			await snapshotBefore();
			const result = await objective.executeQuery(query);
			await snapshotAfter();
			return result;
		};

		return { recordMetadata };
	};
	return { start };
};
