const objectiveDb = process.env.DB_NAME || 'sakila';
module.exports = {
	server: {
		host: '0.0.0.0',
		port: 4000,
	},
	mysql: {
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: process.env.MYSQL_PORT || 43306,
		metadataSchema: 'information_schema',
		mysqlSchema: 'mysql',
		objectiveDb,
		registerSchema: 'register',
	},
	store: {
		metadata: {
			objectiveDb,
			registerStorageEngine: process.env.STORAGE_ENGINE || 'MYISAM',
		},
		register: {
			dbName: 'register',
		},
		objective: {
			dbName: objectiveDb,
		},
	},
	routes: {
		admin: {
			swaggerOptions: {
				swaggerDefinition: {
					info: {
						description: 'Documentation for DWH_E1',
						title: 'DWH_E1',
						version: '1.0.0',
					},
					host: process.env.SERVICE_ENV || 'localhost:4000',
					basePath: '/v1',
					produces: ['application/json'],
					schemes: ['http'],
					securityDefinitions: {
						JWT: {
							type: 'apiKey',
							in: 'header',
							name: 'Authorization',
							description: '',
						},
					},
				},
			},
		},
	},
	logger: {
		transport: 'console',
		include: [
			'tracer',
			'timestamp',
			'level',
			'message',
			'error.message',
			'error.code',
			'error.stack',
			'request.url',
			'request.headers',
			'request.params',
			'request.method',
			'response.statusCode',
			'response.headers',
			'response.time',
			'process',
			'system',
			'package.name',
			'service',
		],
		exclude: ['password', 'secret', 'token', 'request.headers.cookie', 'dependencies', 'devDependencies'],
	},
};
