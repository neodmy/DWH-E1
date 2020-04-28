const { expect } = require('chai');
const system = require('../system');

describe.only('Database', () => {
	const sys = system();
	let store;

	before(async () => {
		({ store } = await sys.start());
	});

	after(() => sys.stop());

	it('should get information_schema tables', async () => {
		const result = await store.metadata.getInnoDBTablestats();
		expect(result.length).eq(27);
	});
});
