module.exports = () => {
	const start = async ({ config, logger, store }) => {
		logger.info('Starting controller component');
		const { metadata, objective, register } = store;

        /*
		await register.initStore();
		await objective.initStore();

        const dropQueries = await metadata.dropAllTablesQueries();
        const createQueries = await metadata.createAllTablesQueries();

		logger.info('Dropping registar tables if exist');
		await register.executeDrop(dropQueries);
		logger.info('Creating registar tables if not exist');
        await register.executeCreate(createQueries);
        
        const data = await metadata.selectAllTables();
        */
	};
	return { start };
};
