const mysql = require('mysql2/promise');

module.exports = () => {
	const start = async ({ config, logger }) => {
		logger.info('Starting mysql component');

		const informationSchema = await mysql.createConnection({
			host: config.host,
			user: config.user,
			password: config.password,
			port: config.port,
			database: config.metadataSchema,
		});

		const mysqlSchema = await mysql.createConnection({
			host: config.host,
			user: config.user,
			password: config.password,
			port: config.port,
			database: config.mysqlSchema,
		});

		const sakilaSchema = await mysql.createConnection({
			host: config.host,
			user: config.user,
			password: config.password,
			port: config.port,
			database: config.sakilaSchema,
		});

		return {
			informationSchema,
			mysqlSchema,
			sakilaSchema,
		};
	};

	return { start };
};
