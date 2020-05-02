const system = require('../system');

describe('Objective store', () => {
	const sys = system();
	let store;

	before(async () => {
		({ store, config } = await sys.start());
		await store.objective.initStore();
	});

	after(() => sys.stop());

	describe('Execute query', () => {
		it('should execute a query without errors', async () => {
			const query = 'CREATE TABLE IF NOT EXISTS pet (name VARCHAR(20), owner VARCHAR(20))';
			const query2 = 'INSERT INTO pet (name, owner) VALUES (\'dayus\',\'rocky\')';
			const query3 = 'SELECT * FROM pet';
			const query4 = 'DELETE FROM pet';
			await store.objective.executeQuery(query);
			await store.objective.executeQuery(query2);
			await store.objective.executeQuery(query3);
			await store.objective.executeQuery(query4);
		});
	});
});
