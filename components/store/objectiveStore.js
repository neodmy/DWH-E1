/* eslint-disable consistent-return */
module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		const { objectiveSchema } = mysql;
		const { dbName } = config;
		logger.info(`Starting ${dbName}Store component`);

		const initStore = async () => {
			logger.info(`${dbName} store | Initiating ${dbName} schema`);
			await objectiveSchema.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
			await objectiveSchema.query(`USE ${dbName}`);
		};

		const executeQuery = async query => {
			if (!query) return;
			logger.info(`${dbName} store | executing query: 
				${query}`);
			const result = await objectiveSchema.query(query);
			return result;
		};

		return {
			initStore,
			executeQuery,
		};
	};

	return { start };
};
