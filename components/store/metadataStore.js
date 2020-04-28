module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		const { informationSchema } = mysql;

		const formatRows = rows => rows.map(row => ({ ...row }));

		const executeQuery = async query => {
			const [rows] = await informationSchema.execute(query);
			return formatRows(rows);
		};

		const sakila = '\'sakila\'';

		const getInformationSchemaTables = () => executeQuery('SHOW TABLES');

		const getViews = () => executeQuery(`SELECT * from VIEWS where TABLE_SCHEMA=${sakila}`);

		const getTriggers = () => executeQuery(`SELECT * from TRIGGERS WHERE TRIGGER_SCHEMA=${sakila}`);

		const getConstraints = () => executeQuery(`SELECT * FROM TABLE_CONSTRAINTS WHERE CONSTRAINT_SCHEMA=${sakila}`);

		const getTables = () => executeQuery(`SELECT * FROM TABLES WHERE TABLE_SCHEMA=${sakila}`);

		const getStatistics = () => executeQuery(`SELECT * FROM STATISTICS WHERE TABLE_SCHEMA=${sakila}`);

		const getSchemata = () => executeQuery(`SELECT * FROM SCHEMATA WHERE SCHEMA_NAME=${sakila}`);

		const getRoutines = () => executeQuery(`SELECT * FROM ROUTINES WHERE ROUTINE_SCHEMA=${sakila}`);

		const getReferentialConstrains = () => executeQuery(`SELECT * FROM REFERENTIAL_CONSTRAINTS WHERE CONSTRAINT_SCHEMA=${sakila}`);

		const getPartitions = () => executeQuery(`SELECT * from PARTITIONS where TABLE_SCHEMA=${sakila}`);

		const getParameters = () => executeQuery(`SELECT * from PARAMETERS where SPECIFIC_SCHEMA=${sakila}`);

		const getKeyColumnUsage = () => executeQuery(`SELECT * FROM KEY_COLUMN_USAGE WHERE CONSTRAINT_SCHEMA=${sakila}`);

		const getInnoDBColumns = () => executeQuery('SELECT * FROM INNODB_COLUMNS');

		const getInnoDBFields = () => executeQuery('SELECT * FROM INNODB_FIELDS');

		const getInnoDBForeign = () => executeQuery('SELECT * FROM INNODB_FOREIGN');

		const getInnoDBForeignCols = () => executeQuery('SELECT * FROM INNODB_FOREIGN_COLS');

		const getInnoDBIndexes = () => executeQuery('SELECT * FROM INNODB_INDEXES');

		const getInnoDBTables = () => executeQuery('SELECT * FROM INNODB_TABLES WHERE NAME LIKE \'%sakila%\'');

		const getInnoDBTablespaces = () => executeQuery('SELECT * FROM INNODB_TABLESPACES WHERE NAME LIKE \'%sakila%\'');

		const getInnoDBTablestats = () => executeQuery('SELECT * FROM INNODB_TABLESTATS WHERE NAME LIKE \'%sakila%\'');

		return {
			getInformationSchemaTables,
			getViews,
			getTriggers,
			getConstraints,
			getTables,
			getStatistics,
			getSchemata,
			getRoutines,
			getReferentialConstrains,
			getPartitions,
			getParameters,
			getKeyColumnUsage,
			getInnoDBColumns,
			getInnoDBFields,
			getInnoDBForeign,
			getInnoDBForeignCols,
			getInnoDBIndexes,
			getInnoDBTables,
			getInnoDBTablespaces,
			getInnoDBTablestats,
		};
	};

	return { start };
};
