module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		logger.info('Starting registerStore component');
		const { registerSchema } = mysql;
		const { dbName } = config;

		const initStore = async () => {
			logger.info('register store | Initiating register schema');
			const createQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;
			const useQuery = `USE ${dbName}`;
			await registerSchema.query(createQuery);
			await registerSchema.query(useQuery);
		};

		const executeDrop = dropQueries => {
			logger.info('register store | dropping register schema tables');
			return Promise.all(dropQueries.map(dropQuery => registerSchema.query(dropQuery)));
		};

		const executeCreate = createQueries => {
			logger.info('register store | creating register schema tables');
			return Promise.all(createQueries.map(async createQuery => {
				await registerSchema.query(createQuery.before);
				await registerSchema.query(createQuery.after);
			}));
		};

		const executeInsertBefore = (query, data) => registerSchema.query(query, [data]);

		return {
			initStore,
			executeDrop,
			executeCreate,
			executeInsertBefore,
		};
	};

	return { start };
};
