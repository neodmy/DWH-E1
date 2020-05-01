module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		logger.info('Starting registerStore component');
		const { registerSchema } = mysql;
		const { dbName } = config;

		const initStore = async () => {
			await registerSchema.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
			await registerSchema.query(`USE ${dbName}`);
		};

		const executeDrop = dropQueries => Promise.all(dropQueries.map(dropQuery => registerSchema.query(dropQuery)));

		const executeCreate = createQueries => Promise.all(createQueries.map(async createQuery => {
			await registerSchema.query(createQuery.before);
			await registerSchema.query(createQuery.after);
		}));

		return {
			initStore,
			executeDrop,
			executeCreate,
		};
	};

	return { start };
};
