module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		const { objectiveSchema } = mysql;
		const { dbName } = config;

		const initStore = async () => {
			await objectiveSchema.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
			await objectiveSchema.query(`USE ${dbName}`);
		};

		return {
			initStore,
		};
	};

	return { start };
};
