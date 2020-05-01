module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		const { informationSchema } = mysql;

		const { objectiveDb } = config;

		const formatRows = rows => rows.map(row => ({ ...row }));

		const executeQuery = async query => {
			const [rows] = await informationSchema.execute(query);
			return formatRows(rows);
		};

		const createTablesQuery = async tableName => {
			const columns = await executeQuery(`SHOW COLUMNS FROM ${tableName}`);

			let query = '';
			let i = 0;
			while (i < columns.length - 1) {
				query += `${columns[i].Field} ${columns[i].Type}, `;
				i += 1;
			}
			query += `${columns[i].Field} ${columns[i].Type}`;

			const createTableBefore = `CREATE TABLE IF NOT EXISTS ${tableName}_${objectiveDb}_BEFORE (${query})`;
			const createTableAfter = `CREATE TABLE IF NOT EXISTS ${tableName}_${objectiveDb}_AFTER (${query})`;
			return { createTableBefore, createTableAfter };
		};

		const dropTablesQueries = tableName => `DROP TABLE IF EXISTS ${tableName}_${objectiveDb}_BEFORE, ${tableName}_${objectiveDb}_AFTER`;

		const selectTableData = async (tableName, filter) => {
			let query = `SELECT * FROM ${tableName}`;
			if (filter) query += ` ${filter}`;
			const result = await executeQuery(query);
			return result;
		};

		const informationSchemaTables = {
			VIEWS: {
				select: () => selectTableData('VIEWS', `WHERE TABLE_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('VIEWS'),
				create: () => createTablesQuery('VIEWS'),
			},
			TRIGGERS: {
				select: () => selectTableData('TRIGGERS', `WHERE TRIGGER_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('TRIGGERS'),
				create: () => createTablesQuery('TRIGGERS'),
			},
			TABLE_CONSTRAINTS: {
				select: () => selectTableData('TABLE_CONSTRAINTS', `WHERE CONSTRAINT_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('TABLE_CONSTRAINTS'),
				create: () => createTablesQuery('TABLE_CONSTRAINTS'),
			},
			TABLES: {
				select: () => selectTableData('TABLES', `WHERE TABLE_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('TABLES'),
				create: () => createTablesQuery('TABLES'),
			},
			STATISTICS: {
				select: () => selectTableData('STATISTICS', `WHERE TABLE_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('STATISTICS'),
				create: () => createTablesQuery('STATISTICS'),
			},
			SCHEMATA: {
				select: () => selectTableData('SCHEMATA', `WHERE SCHEMA_NAME='${objectiveDb}'`),
				drop: () => dropTablesQueries('SCHEMATA'),
				create: () => createTablesQuery('SCHEMATA'),
			},
			ROUTINES: {
				select: () => selectTableData('ROUTINES', `WHERE ROUTINE_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('ROUTINES'),
				create: () => createTablesQuery('ROUTINES'),
			},
			REFERENTIAL_CONSTRAINTS: {
				select: () => selectTableData('REFERENTIAL_CONSTRAINTS', `WHERE CONSTRAINT_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('REFERENTIAL_CONSTRAINTS'),
				create: () => createTablesQuery('REFERENTIAL_CONSTRAINTS'),
			},
			PARTITIONS: {
				select: () => selectTableData('PARTITIONS', `WHERE TABLE_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('PARTITIONS'),
				create: () => createTablesQuery('PARTITIONS'),
			},
			PARAMETERS: {
				select: () => selectTableData('PARAMETERS', `WHERE SPECIFIC_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('PARAMETERS'),
				create: () => createTablesQuery('PARAMETERS'),
			},
			KEY_COLUMN_USAGE: {
				select: () => selectTableData('KEY_COLUMN_USAGE', `WHERE CONSTRAINT_SCHEMA='${objectiveDb}'`),
				drop: () => dropTablesQueries('KEY_COLUMN_USAGE'),
				create: () => createTablesQuery('KEY_COLUMN_USAGE'),
			},
			INNODB_COLUMNS: {
				select: () => selectTableData('INNODB_COLUMNS'),
				drop: () => dropTablesQueries('INNODB_COLUMNS'),
				create: () => createTablesQuery('INNODB_COLUMNS'),
			},
			INNODB_FIELDS: {
				select: () => selectTableData('INNODB_FIELDS'),
				drop: () => dropTablesQueries('INNODB_FIELDS'),
				create: () => createTablesQuery('INNODB_FIELDS'),
			},
			INNODB_FOREIGN: {
				select: () => selectTableData('INNODB_FOREIGN'),
				drop: () => dropTablesQueries('INNODB_FOREIGN'),
				create: () => createTablesQuery('INNODB_FOREIGN'),
			},
			INNODB_FOREIGN_COLS: {
				select: () => selectTableData('INNODB_FOREIGN_COLS'),
				drop: () => dropTablesQueries('INNODB_FOREIGN_COLS'),
				create: () => createTablesQuery('INNODB_FOREIGN_COLS'),
			},
			INNODB_INDEXES: {
				select: () => selectTableData('INNODB_INDEXES'),
				drop: () => dropTablesQueries('INNODB_INDEXES'),
				create: () => createTablesQuery('INNODB_INDEXES'),
			},
			INNODB_TABLES: {
				select: () => selectTableData('INNODB_TABLES', `WHERE NAME LIKE '%${objectiveDb}%'`),
				drop: () => dropTablesQueries('INNODB_TABLES'),
				create: () => createTablesQuery('INNODB_TABLES'),
			},
			INNODB_TABLESPACES: {
				select: () => selectTableData('INNODB_TABLESPACES', `WHERE NAME LIKE '%${objectiveDb}%'`),
				drop: () => dropTablesQueries('INNODB_TABLESPACES'),
				create: () => createTablesQuery('INNODB_TABLESPACES'),
			},
			INNODB_TABLESTATS: {
				select: () => selectTableData('INNODB_TABLESTATS', `WHERE NAME LIKE '%${objectiveDb}%'`),
				drop: () => dropTablesQueries('INNODB_TABLESTATS'),
				create: () => createTablesQuery('INNODB_TABLESTATS'),
			},
		};

		const selectAllTablesQueries = () => Promise.all(Object.keys(informationSchemaTables).map(key => informationSchemaTables[key].select()));

		const createAllTablesQueries = () => Promise.all(Object.keys(informationSchemaTables).map(key => informationSchemaTables[key].create()));

		const dropAllTablesQueries = () => Object.keys(informationSchemaTables).map(key => informationSchemaTables[key].drop());

		return {
			...informationSchemaTables,
			selectAllTablesQueries,
			createAllTablesQueries,
			dropAllTablesQueries,
		};
	};

	return { start };
};
