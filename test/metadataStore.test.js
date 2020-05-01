/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const system = require('../system');

describe('Database', () => {
	const sys = system();
	let store;

	before(async () => {
		({ store, config } = await sys.start());
		ojectiveDb = config.store.objective.dbName;
	});


	after(() => sys.stop());

	describe('select results', () => {
		it('should get information_schema VIEWS table data', async () => {
			const result = await store.metadata.VIEWS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema TRIGGERS table data', async () => {
			const result = await store.metadata.TRIGGERS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema TABLES table data', async () => {
			const result = await store.metadata.TABLES.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema STATISTICS table data', async () => {
			const result = await store.metadata.STATISTICS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema SCHEMATA table data', async () => {
			const result = await store.metadata.SCHEMATA.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema ROUTINES table data', async () => {
			const result = await store.metadata.ROUTINES.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema REFERENTIAL_CONSTRAINTS table data', async () => {
			const result = await store.metadata.REFERENTIAL_CONSTRAINTS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema PARTITIONS table data', async () => {
			const result = await store.metadata.PARTITIONS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema PARAMETERS table data', async () => {
			const result = await store.metadata.PARAMETERS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema KEY_COLUMN_USAGE table data', async () => {
			const result = await store.metadata.KEY_COLUMN_USAGE.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_COLUMNS table data', async () => {
			const result = await store.metadata.INNODB_COLUMNS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_FIELDS table data', async () => {
			const result = await store.metadata.INNODB_FIELDS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_FOREIGN table data', async () => {
			const result = await store.metadata.INNODB_FOREIGN.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_FOREIGN_COLS table data', async () => {
			const result = await store.metadata.INNODB_FOREIGN_COLS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_INDEXES table data', async () => {
			const result = await store.metadata.INNODB_INDEXES.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_TABLES table data', async () => {
			const result = await store.metadata.INNODB_TABLES.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_TABLESPACES table data', async () => {
			const result = await store.metadata.INNODB_TABLESPACES.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_TABLESTATS table data', async () => {
			const result = await store.metadata.INNODB_TABLESTATS.select();
			expect(result.length).not.eq(0);
		});

		it('should get information_schema INNODB_TABLESTATS table data', async () => {
			const result = await store.metadata.INNODB_TABLESTATS.select();
			expect(result.length).not.eq(0);
		});

		it('should execute select queries for every table', async () => {
			const results = await store.metadata.selectAllTables();
			expect(results.length).eq(19);
		});
	});

	describe('drop table queries', () => {
		it('should generate drop query for VIEWS table', () => {
			const result = store.metadata.VIEWS.drop();
			expect(result).eq('DROP TABLE IF EXISTS VIEWS_BEFORE, VIEWS_AFTER');
		});

		it('should generate drop query for TRIGGERS table', () => {
			const result = store.metadata.TRIGGERS.drop();
			expect(result).eq('DROP TABLE IF EXISTS TRIGGERS_BEFORE, TRIGGERS_AFTER');
		});

		it('should generate drop query for TABLE_CONSTRAINTS table', () => {
			const result = store.metadata.TABLE_CONSTRAINTS.drop();
			expect(result).eq('DROP TABLE IF EXISTS TABLE_CONSTRAINTS_BEFORE, TABLE_CONSTRAINTS_AFTER');
		});

		it('should generate drop query for TABLES table', () => {
			const result = store.metadata.TABLES.drop();
			expect(result).eq('DROP TABLE IF EXISTS TABLES_BEFORE, TABLES_AFTER');
		});

		it('should generate drop query for STATISTICS table', () => {
			const result = store.metadata.STATISTICS.drop();
			expect(result).eq('DROP TABLE IF EXISTS STATISTICS_BEFORE, STATISTICS_AFTER');
		});

		it('should generate drop query for SCHEMATA table', () => {
			const result = store.metadata.SCHEMATA.drop();
			expect(result).eq('DROP TABLE IF EXISTS SCHEMATA_BEFORE, SCHEMATA_AFTER');
		});

		it('should generate drop query for ROUTINES table', () => {
			const result = store.metadata.ROUTINES.drop();
			expect(result).eq('DROP TABLE IF EXISTS ROUTINES_BEFORE, ROUTINES_AFTER');
		});

		it('should generate drop query for REFERENTIAL_CONSTRAINTS table', () => {
			const result = store.metadata.REFERENTIAL_CONSTRAINTS.drop();
			expect(result).eq('DROP TABLE IF EXISTS REFERENTIAL_CONSTRAINTS_BEFORE, REFERENTIAL_CONSTRAINTS_AFTER');
		});

		it('should generate drop query for PARTITIONS table', () => {
			const result = store.metadata.PARTITIONS.drop();
			expect(result).eq('DROP TABLE IF EXISTS PARTITIONS_BEFORE, PARTITIONS_AFTER');
		});

		it('should generate drop query for PARAMETERS table', () => {
			const result = store.metadata.PARAMETERS.drop();
			expect(result).eq('DROP TABLE IF EXISTS PARAMETERS_BEFORE, PARAMETERS_AFTER');
		});

		it('should generate drop query for KEY_COLUMN_USAGE table', () => {
			const result = store.metadata.KEY_COLUMN_USAGE.drop();
			expect(result).eq('DROP TABLE IF EXISTS KEY_COLUMN_USAGE_BEFORE, KEY_COLUMN_USAGE_AFTER');
		});

		it('should generate drop query for INNODB_COLUMNS table', () => {
			const result = store.metadata.INNODB_COLUMNS.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_COLUMNS_BEFORE, INNODB_COLUMNS_AFTER');
		});

		it('should generate drop query for INNODB_FIELDS table', () => {
			const result = store.metadata.INNODB_FIELDS.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_FIELDS_BEFORE, INNODB_FIELDS_AFTER');
		});

		it('should generate drop query for INNODB_FOREIGN table', () => {
			const result = store.metadata.INNODB_FOREIGN.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_FOREIGN_BEFORE, INNODB_FOREIGN_AFTER');
		});

		it('should generate drop query for INNODB_FOREIGN_COLS table', () => {
			const result = store.metadata.INNODB_FOREIGN_COLS.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_FOREIGN_COLS_BEFORE, INNODB_FOREIGN_COLS_AFTER');
		});

		it('should generate drop query for INNODB_INDEXES table', () => {
			const result = store.metadata.INNODB_INDEXES.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_INDEXES_BEFORE, INNODB_INDEXES_AFTER');
		});

		it('should generate drop query for INNODB_TABLES table', () => {
			const result = store.metadata.INNODB_TABLES.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_TABLES_BEFORE, INNODB_TABLES_AFTER');
		});

		it('should generate drop query for INNODB_TABLESPACES table', () => {
			const result = store.metadata.INNODB_TABLESPACES.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_TABLESPACES_BEFORE, INNODB_TABLESPACES_AFTER');
		});

		it('should generate drop query for INNODB_TABLESTATS table', () => {
			const result = store.metadata.INNODB_TABLESTATS.drop();
			expect(result).eq('DROP TABLE IF EXISTS INNODB_TABLESTATS_BEFORE, INNODB_TABLESTATS_AFTER');
		});

		it('should return an array of drop table queries for every table', () => {
			const results = store.metadata.dropAllTablesQueries();
			expect(results.length).eq(19);
		});
	});

	describe('create table queries', () => {
		it('should generate create tables queries for VIEWS table', async () => {
			const result = await store.metadata.VIEWS.create();
			expect(result.before).includes('VIEWS_BEFORE');
			expect(result.after).includes('VIEWS_AFTER');
		});

		it('should generate create tables queries for TRIGGERS table', async () => {
			const result = await store.metadata.TRIGGERS.create();
			expect(result.before).includes('TRIGGERS_BEFORE');
			expect(result.after).includes('TRIGGERS_AFTER');
		});

		it('should generate create tables queries for TABLE_CONSTRAINTS table', async () => {
			const result = await store.metadata.TABLE_CONSTRAINTS.create();
			expect(result.before).includes('TABLE_CONSTRAINTS_BEFORE');
			expect(result.after).includes('TABLE_CONSTRAINTS_AFTER');
		});

		it('should generate create tables queries for TABLES table', async () => {
			const result = await store.metadata.TABLES.create();
			expect(result.before).includes('TABLES_BEFORE');
			expect(result.after).includes('TABLES_AFTER');
		});

		it('should generate create tables queries for STATISTICS table', async () => {
			const result = await store.metadata.STATISTICS.create();
			expect(result.before).includes('STATISTICS_BEFORE');
			expect(result.after).includes('STATISTICS_AFTER');
		});

		it('should generate create tables queries for SCHEMATA table', async () => {
			const result = await store.metadata.SCHEMATA.create();
			expect(result.before).includes('SCHEMATA_BEFORE');
			expect(result.after).includes('SCHEMATA_AFTER');
		});

		it('should generate create tables queries for ROUTINES table', async () => {
			const result = await store.metadata.ROUTINES.create();
			expect(result.before).includes('ROUTINES_BEFORE');
			expect(result.after).includes('ROUTINES_AFTER');
		});

		it('should generate create tables queries for REFERENTIAL_CONSTRAINTS table', async () => {
			const result = await store.metadata.REFERENTIAL_CONSTRAINTS.create();
			expect(result.before).includes('REFERENTIAL_CONSTRAINTS_BEFORE');
			expect(result.after).includes('REFERENTIAL_CONSTRAINTS_AFTER');
		});

		it('should generate create tables queries for PARTITIONS table', async () => {
			const result = await store.metadata.PARTITIONS.create();
			expect(result.before).includes('PARTITIONS_BEFORE');
			expect(result.after).includes('PARTITIONS_AFTER');
		});

		it('should generate create tables queries for PARAMETERS table', async () => {
			const result = await store.metadata.PARAMETERS.create();
			expect(result.before).includes('PARAMETERS_BEFORE');
			expect(result.after).includes('PARAMETERS_AFTER');
		});

		it('should generate create tables queries for KEY_COLUMN_USAGE table', async () => {
			const result = await store.metadata.KEY_COLUMN_USAGE.create();
			expect(result.before).includes('KEY_COLUMN_USAGE_BEFORE');
			expect(result.after).includes('KEY_COLUMN_USAGE_AFTER');
		});

		it('should generate create tables queries for INNODB_COLUMNS table', async () => {
			const result = await store.metadata.INNODB_COLUMNS.create();
			expect(result.before).includes('INNODB_COLUMNS_BEFORE');
			expect(result.after).includes('INNODB_COLUMNS_AFTER');
		});

		it('should generate create tables queries for INNODB_FIELDS table', async () => {
			const result = await store.metadata.INNODB_FIELDS.create();
			expect(result.before).includes('INNODB_FIELDS_BEFORE');
			expect(result.after).includes('INNODB_FIELDS_AFTER');
		});

		it('should generate create tables queries for INNODB_FOREIGN table', async () => {
			const result = await store.metadata.INNODB_FOREIGN.create();
			expect(result.before).includes('INNODB_FOREIGN_BEFORE');
			expect(result.after).includes('INNODB_FOREIGN_AFTER');
		});

		it('should generate create tables queries for INNODB_FOREIGN_COLS table', async () => {
			const result = await store.metadata.INNODB_FOREIGN_COLS.create();
			expect(result.before).includes('INNODB_FOREIGN_COLS_BEFORE');
			expect(result.after).includes('INNODB_FOREIGN_COLS_AFTER');
		});

		it('should generate create tables queries for INNODB_INDEXES table', async () => {
			const result = await store.metadata.INNODB_INDEXES.create();
			expect(result.before).includes('INNODB_INDEXES_BEFORE');
			expect(result.after).includes('INNODB_INDEXES_AFTER');
		});

		it('should generate create tables queries for INNODB_TABLES table', async () => {
			const result = await store.metadata.INNODB_TABLES.create();
			expect(result.before).includes('INNODB_TABLES_BEFORE');
			expect(result.after).includes('INNODB_TABLES_AFTER');
		});

		it('should generate create tables queries for INNODB_TABLESPACES table', async () => {
			const result = await store.metadata.INNODB_TABLESPACES.create();
			expect(result.before).includes('INNODB_TABLESPACES_BEFORE');
			expect(result.after).includes('INNODB_TABLESPACES_AFTER');
		});

		it('should generate create tables queries for INNODB_TABLESTATS table', async () => {
			const result = await store.metadata.INNODB_TABLESTATS.create();
			expect(result.before).includes('INNODB_TABLESTATS_BEFORE');
			expect(result.after).includes('INNODB_TABLESTATS_AFTER');
		});

		it('should return an array of create table queries for every table', async () => {
			const results = await store.metadata.createAllTablesQueries();
			expect(results.length).eq(19);
			results.forEach(result => {
				expect(result.before).to.exist;
				expect(result.after).to.exist;
			});
		});
	});

	describe.only('insert into table queries', () => {
		it('should generate drop query for VIEWS table', async () => {
			const result = await store.metadata.VIEWS.insert();
			expect(result.before).includes('INSERT INTO VIEWS_BEFORE');
			expect(result.after).includes('INSERT INTO VIEWS_AFTER');
		});

		it('should generate drop query for TRIGGERS table', async () => {
			const result = await store.metadata.TRIGGERS.insert();
			expect(result.before).includes('INSERT INTO TRIGGERS_BEFORE');
			expect(result.after).includes('INSERT INTO TRIGGERS_AFTER');
		});

		it('should generate drop query for TABLE_CONSTRAINTS table', async () => {
			const result = await store.metadata.TABLE_CONSTRAINTS.insert();
			expect(result.before).includes('INSERT INTO TABLE_CONSTRAINTS_BEFORE');
			expect(result.after).includes('INSERT INTO TABLE_CONSTRAINTS_AFTER');
		});

		it('should generate drop query for TABLES table', async () => {
			const result = await store.metadata.TABLES.insert();
			expect(result.before).includes('INSERT INTO TABLES_BEFORE');
			expect(result.after).includes('INSERT INTO TABLES_AFTER');
		});

		it('should generate drop query for STATISTICS table', async () => {
			const result = await store.metadata.STATISTICS.insert();
			expect(result.before).includes('INSERT INTO STATISTICS_BEFORE');
			expect(result.after).includes('INSERT INTO STATISTICS_AFTER');
		});

		it('should generate drop query for SCHEMATA table', async () => {
			const result = await store.metadata.SCHEMATA.insert();
			expect(result.before).includes('INSERT INTO SCHEMATA_BEFORE');
			expect(result.after).includes('INSERT INTO SCHEMATA_AFTER');
		});

		it('should generate drop query for ROUTINES table', async () => {
			const result = await store.metadata.ROUTINES.insert();
			expect(result.before).includes('INSERT INTO ROUTINES_BEFORE');
			expect(result.after).includes('INSERT INTO ROUTINES_AFTER');
		});

		it('should generate drop query for REFERENTIAL_CONSTRAINTS table', async () => {
			const result = await store.metadata.REFERENTIAL_CONSTRAINTS.insert();
			expect(result.before).includes('INSERT INTO REFERENTIAL_CONSTRAINTS_BEFORE');
			expect(result.after).includes('INSERT INTO REFERENTIAL_CONSTRAINTS_AFTER');
		});

		it('should generate drop query for PARTITIONS table', async () => {
			const result = await store.metadata.PARTITIONS.insert();
			expect(result.before).includes('INSERT INTO PARTITIONS_BEFORE');
			expect(result.after).includes('INSERT INTO PARTITIONS_AFTER');
		});

		it('should generate drop query for PARAMETERS table', async () => {
			const result = await store.metadata.PARAMETERS.insert();
			expect(result.before).includes('INSERT INTO PARAMETERS_BEFORE');
			expect(result.after).includes('INSERT INTO PARAMETERS_AFTER');
		});

		it('should generate drop query for KEY_COLUMN_USAGE table', async () => {
			const result = await store.metadata.KEY_COLUMN_USAGE.insert();
			expect(result.before).includes('INSERT INTO KEY_COLUMN_USAGE_BEFORE');
			expect(result.after).includes('INSERT INTO KEY_COLUMN_USAGE_AFTER');
		});

		it('should generate drop query for INNODB_COLUMNS table', async () => {
			const result = await store.metadata.INNODB_COLUMNS.insert();
			expect(result.before).includes('INSERT INTO INNODB_COLUMNS_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_COLUMNS_AFTER');
		});

		it('should generate drop query for INNODB_FIELDS table', async () => {
			const result = await store.metadata.INNODB_FIELDS.insert();
			expect(result.before).includes('INSERT INTO INNODB_FIELDS_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_FIELDS_AFTER');
		});

		it('should generate drop query for INNODB_FOREIGN table', async () => {
			const result = await store.metadata.INNODB_FOREIGN.insert();
			expect(result.before).includes('INSERT INTO INNODB_FOREIGN_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_FOREIGN_AFTER');
		});

		it('should generate drop query for INNODB_FOREIGN_COLS table', async () => {
			const result = await store.metadata.INNODB_FOREIGN_COLS.insert();
			expect(result.before).includes('INSERT INTO INNODB_FOREIGN_COLS_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_FOREIGN_COLS_AFTER');
		});

		it('should generate drop query for INNODB_INDEXES table', async () => {
			const result = await store.metadata.INNODB_INDEXES.insert();
			expect(result.before).includes('INSERT INTO INNODB_INDEXES_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_INDEXES_AFTER');
		});

		it('should generate drop query for INNODB_TABLES table', async () => {
			const result = await store.metadata.INNODB_TABLES.insert();
			expect(result.before).includes('INSERT INTO INNODB_TABLES_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_TABLES_AFTER');
		});

		it('should generate drop query for INNODB_TABLESPACES table', async () => {
			const result = await store.metadata.INNODB_TABLESPACES.insert();
			expect(result.before).includes('INSERT INTO INNODB_TABLESPACES_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_TABLESPACES_AFTER');
		});

		it('should generate drop query for INNODB_TABLESTATS table', async () => {
			const result = await store.metadata.INNODB_TABLESTATS.insert();
			expect(result.before).includes('INSERT INTO INNODB_TABLESTATS_BEFORE');
			expect(result.after).includes('INSERT INTO INNODB_TABLESTATS_AFTER');
		});
	});
});
