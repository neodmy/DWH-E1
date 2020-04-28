const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'DWH_E1' })
	.bootstrap(join(__dirname, 'components'));
