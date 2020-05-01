module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		const initStore = async () => {};

		return {
			initStore,
		};
	};

	return { start };
};
