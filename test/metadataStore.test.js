const { expect } = require('chai');
const system = require('../system');

describe('Database', () => {
	const sys = system();
	let store;
	let ojectiveDb;

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
	});

	describe('drop tables queries', () => {
		it('should generate drop query for VIEWS table', () => {
			const result = store.metadata.VIEWS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS VIEWS_${ojectiveDb}_BEFORE, VIEWS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for TRIGGERS table', () => {
			const result = store.metadata.TRIGGERS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS TRIGGERS_${ojectiveDb}_BEFORE, TRIGGERS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for TABLE_CONSTRAINTS table', () => {
			const result = store.metadata.TABLE_CONSTRAINTS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS TABLE_CONSTRAINTS_${ojectiveDb}_BEFORE, TABLE_CONSTRAINTS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for TABLES table', () => {
			const result = store.metadata.TABLES.drop();
			expect(result).eq(`DROP TABLE IF EXISTS TABLES_${ojectiveDb}_BEFORE, TABLES_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for STATISTICS table', () => {
			const result = store.metadata.STATISTICS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS STATISTICS_${ojectiveDb}_BEFORE, STATISTICS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for SCHEMATA table', () => {
			const result = store.metadata.SCHEMATA.drop();
			expect(result).eq(`DROP TABLE IF EXISTS SCHEMATA_${ojectiveDb}_BEFORE, SCHEMATA_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for ROUTINES table', () => {
			const result = store.metadata.ROUTINES.drop();
			expect(result).eq(`DROP TABLE IF EXISTS ROUTINES_${ojectiveDb}_BEFORE, ROUTINES_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for REFERENTIAL_CONSTRAINTS table', () => {
			const result = store.metadata.REFERENTIAL_CONSTRAINTS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS REFERENTIAL_CONSTRAINTS_${ojectiveDb}_BEFORE, REFERENTIAL_CONSTRAINTS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for PARTITIONS table', () => {
			const result = store.metadata.PARTITIONS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS PARTITIONS_${ojectiveDb}_BEFORE, PARTITIONS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for PARAMETERS table', () => {
			const result = store.metadata.PARAMETERS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS PARAMETERS_${ojectiveDb}_BEFORE, PARAMETERS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for KEY_COLUMN_USAGE table', () => {
			const result = store.metadata.KEY_COLUMN_USAGE.drop();
			expect(result).eq(`DROP TABLE IF EXISTS KEY_COLUMN_USAGE_${ojectiveDb}_BEFORE, KEY_COLUMN_USAGE_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_COLUMNS table', () => {
			const result = store.metadata.INNODB_COLUMNS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_COLUMNS_${ojectiveDb}_BEFORE, INNODB_COLUMNS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_FIELDS table', () => {
			const result = store.metadata.INNODB_FIELDS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_FIELDS_${ojectiveDb}_BEFORE, INNODB_FIELDS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_FOREIGN table', () => {
			const result = store.metadata.INNODB_FOREIGN.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_FOREIGN_${ojectiveDb}_BEFORE, INNODB_FOREIGN_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_FOREIGN_COLS table', () => {
			const result = store.metadata.INNODB_FOREIGN_COLS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_FOREIGN_COLS_${ojectiveDb}_BEFORE, INNODB_FOREIGN_COLS_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_INDEXES table', () => {
			const result = store.metadata.INNODB_INDEXES.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_INDEXES_${ojectiveDb}_BEFORE, INNODB_INDEXES_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_TABLES table', () => {
			const result = store.metadata.INNODB_TABLES.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_TABLES_${ojectiveDb}_BEFORE, INNODB_TABLES_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_TABLESPACES table', () => {
			const result = store.metadata.INNODB_TABLESPACES.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_TABLESPACES_${ojectiveDb}_BEFORE, INNODB_TABLESPACES_${ojectiveDb}_AFTER`);
		});

		it('should generate drop query for INNODB_TABLESTATS table', () => {
			const result = store.metadata.INNODB_TABLESTATS.drop();
			expect(result).eq(`DROP TABLE IF EXISTS INNODB_TABLESTATS_${ojectiveDb}_BEFORE, INNODB_TABLESTATS_${ojectiveDb}_AFTER`);
		});
	});

	describe('create tables queries', () => {
		it('should generate create tables queries for VIEWS table', async () => {
			const result = await store.metadata.VIEWS.create();
			expect(result.createTableBefore).includes(`VIEWS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`VIEWS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for TRIGGERS table', async () => {
			const result = await store.metadata.TRIGGERS.create();
			expect(result.createTableBefore).includes(`TRIGGERS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`TRIGGERS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for TABLE_CONSTRAINTS table', async () => {
			const result = await store.metadata.TABLE_CONSTRAINTS.create();
			expect(result.createTableBefore).includes(`TABLE_CONSTRAINTS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`TABLE_CONSTRAINTS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for TABLES table', async () => {
			const result = await store.metadata.TABLES.create();
			expect(result.createTableBefore).includes(`TABLES_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`TABLES_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for STATISTICS table', async () => {
			const result = await store.metadata.STATISTICS.create();
			expect(result.createTableBefore).includes(`STATISTICS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`STATISTICS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for SCHEMATA table', async () => {
			const result = await store.metadata.SCHEMATA.create();
			expect(result.createTableBefore).includes(`SCHEMATA_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`SCHEMATA_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for ROUTINES table', async () => {
			const result = await store.metadata.ROUTINES.create();
			expect(result.createTableBefore).includes(`ROUTINES_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`ROUTINES_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for REFERENTIAL_CONSTRAINTS table', async () => {
			const result = await store.metadata.REFERENTIAL_CONSTRAINTS.create();
			expect(result.createTableBefore).includes(`REFERENTIAL_CONSTRAINTS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`REFERENTIAL_CONSTRAINTS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for PARTITIONS table', async () => {
			const result = await store.metadata.PARTITIONS.create();
			expect(result.createTableBefore).includes(`PARTITIONS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`PARTITIONS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for PARAMETERS table', async () => {
			const result = await store.metadata.PARAMETERS.create();
			expect(result.createTableBefore).includes(`PARAMETERS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`PARAMETERS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for KEY_COLUMN_USAGE table', async () => {
			const result = await store.metadata.KEY_COLUMN_USAGE.create();
			expect(result.createTableBefore).includes(`KEY_COLUMN_USAGE_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`KEY_COLUMN_USAGE_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_COLUMNS table', async () => {
			const result = await store.metadata.INNODB_COLUMNS.create();
			expect(result.createTableBefore).includes(`INNODB_COLUMNS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_COLUMNS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_FIELDS table', async () => {
			const result = await store.metadata.INNODB_FIELDS.create();
			expect(result.createTableBefore).includes(`INNODB_FIELDS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_FIELDS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_FOREIGN table', async () => {
			const result = await store.metadata.INNODB_FOREIGN.create();
			expect(result.createTableBefore).includes(`INNODB_FOREIGN_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_FOREIGN_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_FOREIGN_COLS table', async () => {
			const result = await store.metadata.INNODB_FOREIGN_COLS.create();
			expect(result.createTableBefore).includes(`INNODB_FOREIGN_COLS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_FOREIGN_COLS_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_INDEXES table', async () => {
			const result = await store.metadata.INNODB_INDEXES.create();
			expect(result.createTableBefore).includes(`INNODB_INDEXES_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_INDEXES_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_TABLES table', async () => {
			const result = await store.metadata.INNODB_TABLES.create();
			expect(result.createTableBefore).includes(`INNODB_TABLES_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_TABLES_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_TABLESPACES table', async () => {
			const result = await store.metadata.INNODB_TABLESPACES.create();
			expect(result.createTableBefore).includes(`INNODB_TABLESPACES_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_TABLESPACES_${ojectiveDb}_AFTER`);
		});

		it('should generate create tables queries for INNODB_TABLESTATS table', async () => {
			const result = await store.metadata.INNODB_TABLESTATS.create();
			expect(result.createTableBefore).includes(`INNODB_TABLESTATS_${ojectiveDb}_BEFORE`);
			expect(result.createTableAfter).includes(`INNODB_TABLESTATS_${ojectiveDb}_AFTER`);
		});
	});
});
