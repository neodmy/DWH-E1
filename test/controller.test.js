const system = require('../system');

describe('Controller', () => {
	const sys = system();
	let controller;

	before(async () => {
		sys.remove('middleware.default');
		sys.remove('middleware.prepper');
		sys.remove('app');
		sys.remove('routes');
		sys.remove('routes.admin');
		sys.remove('routes.api');
		sys.remove('server');
		({ controller } = await sys.start());
	});

	it('should execute query and store metadata without throwing', async () => {
		await controller.recordMetadata('SELECT * FROM actor');
	});
});
