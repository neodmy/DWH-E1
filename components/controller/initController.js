module.exports = () => {
	const start = async ({ logger, store }) => {
		logger.info('Starting controller component');
		const { metadata, objective, register } = store;


		await register.initStore();
		await objective.initStore();

		const dropQueries = await metadata.dropAllTablesQueries();
		const createQueries = await metadata.createAllTablesQueries();

		const selectMetadata = () => Promise.all(Object.keys(metadata.informationSchemaTables)
			.map(async tableName => {
				const table = metadata.informationSchemaTables[tableName];
				return table.select();
			}));

		const insertMetadataBefore = data => Promise.all(Object.keys(metadata.informationSchemaTables)
			.map(async (tableName, index) => {
				const table = metadata.informationSchemaTables[tableName];
				logger.info(`register store | inserting data (${data[index].length} rows) into register.${tableName}_BEFORE`);
				const insertQuery = await table.insert();
				await register.executeInsertBefore(insertQuery.before, data[index]);
			}));

		const insertMetadataAfter = data => Promise.all(Object.keys(metadata.informationSchemaTables)
			.map(async (tableName, index) => {
				const table = metadata.informationSchemaTables[tableName];
				logger.info(`register store | inserting data (${data[index].length} rows) into register.${tableName}_AFTER`);
				const insertQuery = await table.insert();
				await register.executeInsertBefore(insertQuery.after, data[index]);
			}));

		const cleanRegisterTables = async () => {
			logger.info('controller | cleaning register tables');
			await register.executeDrop(dropQueries);
			await register.executeCreate(createQueries);
		};

		const recordMetadata = async query => {
			await cleanRegisterTables();
			const metadataBefore = await selectMetadata();
			const result = await objective.executeQuery(query);
			const metadataAfter = await selectMetadata();
			await insertMetadataBefore(metadataBefore);
			await insertMetadataAfter(metadataAfter);
			logger.info(`controller | metadata update for query: ${query}`);
			return result;
		};

		return { recordMetadata };
	};
	return { start };
};
