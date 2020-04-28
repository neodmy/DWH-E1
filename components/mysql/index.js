const System = require('systemic');
const initMysql = require('./initMysql');

module.exports = new System({ name: 'mysql' })
	.add('mysql', initMysql())
	.dependsOn('config', 'logger');
