const bodyParser = require('body-parser');

module.exports = () => {
	const start = async ({
		app, logger, controller, config,
	}) => {
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));

		const asyncWrapper = (next, fn) => Promise.resolve(fn()).catch(next);

		app.post('/v1/query', async (req, res, next) => asyncWrapper(next, async () => {
			try {
				await controller.recordMetadata(req.body.query);
				res.send(`Metadata for ${config.dbName} have been succesfully updated`);
			} catch (error) {
				logger.error(error.message);
				res.status(400).send(`Metadata were not updated because of error: ${error.message}`);
			}
		}));

		return Promise.resolve();
	};

	return { start };
};
