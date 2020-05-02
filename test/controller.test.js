const system = require('../system');

describe('Controller', () => {
	const sys = system();
	let controller;

	before(async () => {
		({ controller } = await sys.start());
	});

	it('should execute query and store metadata without throwing', async () => {
		await controller.recordMetadata('SELECT * FROM actor');
	});
});
