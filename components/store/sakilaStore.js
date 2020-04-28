module.exports = () => {
	const start = async ({ config, logger, mysql }) => {
		const getActors = () => {
			const result = mysql.sakilaSchema.query('SELECT * FROM `actor`');
			return result;
		};

		return { getActors };
	};

	return { start };
};
