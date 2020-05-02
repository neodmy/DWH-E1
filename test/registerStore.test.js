/* eslint-disable no-unused-expressions */
const system = require('../system');

describe('Register store', () => {
	const sys = system();
	let store;

	before(async () => {
		sys.remove('middleware.default');
		sys.remove('middleware.prepper');
		sys.remove('app');
		sys.remove('routes');
		sys.remove('routes.admin');
		sys.remove('routes.api');
		sys.remove('server');
		sys.remove('controller');
		({ store } = await sys.start());
		const dropQueries = await store.metadata.dropAllTablesQueries();
		const createQueries = await store.metadata.createAllTablesQueries();
		await store.register.initStore();
		await store.register.executeDrop(dropQueries);
		await store.register.executeCreate(createQueries);
	});

	after(() => sys.stop());

	describe('insert results', () => {
		it('should insert information_schema VIEWS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.VIEWS.select();
			const insertQuery = await store.metadata.informationSchemaTables.VIEWS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema TRIGGERS table data', async () => {
			const data = await store.metadata.informationSchemaTables.TRIGGERS.select();
			const insertQuery = await store.metadata.informationSchemaTables.TRIGGERS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema TABLE_CONSTRAINTS table data', async () => {
			const data = await store.metadata.informationSchemaTables.TABLE_CONSTRAINTS.select();
			const insertQuery = await store.metadata.informationSchemaTables.TABLE_CONSTRAINTS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema TABLES table data', async () => {
			const data = await store.metadata.informationSchemaTables.TABLES.select();
			const insertQuery = await store.metadata.informationSchemaTables.TABLES.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema STATISTICS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.STATISTICS.select();
			const insertQuery = await store.metadata.informationSchemaTables.STATISTICS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema SCHEMATA data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.SCHEMATA.select();
			const insertQuery = await store.metadata.informationSchemaTables.SCHEMATA.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema ROUTINES data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.ROUTINES.select();
			const insertQuery = await store.metadata.informationSchemaTables.ROUTINES.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema REFERENTIAL_CONSTRAINTS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.REFERENTIAL_CONSTRAINTS.select();
			const insertQuery = await store.metadata.informationSchemaTables.REFERENTIAL_CONSTRAINTS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema PARTITIONS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.PARTITIONS.select();
			const insertQuery = await store.metadata.informationSchemaTables.PARTITIONS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema PARAMETERS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.PARAMETERS.select();
			const insertQuery = await store.metadata.informationSchemaTables.PARAMETERS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it.skip('should insert information_schema KEY_COLUMN_USAGE data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.KEY_COLUMN_USAGE.select();
			const insertQuery = await store.metadata.informationSchemaTables.KEY_COLUMN_USAGE.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_COLUMNS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_COLUMNS.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_COLUMNS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_FIELDS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_FIELDS.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_FIELDS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_FOREIGN data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_FOREIGN.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_FOREIGN.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_FOREIGN_COLS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_FOREIGN_COLS.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_FOREIGN_COLS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_INDEXES data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_INDEXES.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_INDEXES.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_TABLES data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_TABLES.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_TABLES.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_TABLESPACES data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_TABLESPACES.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_TABLESPACES.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});

		it('should insert information_schema INNODB_TABLESTATS data into register tables', async () => {
			const data = await store.metadata.informationSchemaTables.INNODB_TABLESTATS.select();
			const insertQuery = await store.metadata.informationSchemaTables.INNODB_TABLESTATS.insert();
			await store.register.executeInsertBefore(insertQuery.before, data);
			await store.register.executeInsertBefore(insertQuery.after, data);
		});
	});
});
