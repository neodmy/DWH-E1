const System = require('systemic');
const initMetadataStore = require('./metadataStore');
const initMysqlStore = require('./mysqlStore');
const initSakilaStore = require('./sakilaStore');

module.exports = new System({ name: 'store' })
	.add('store.metadata', initMetadataStore())
	.dependsOn('config', 'logger', 'mysql')
	.add('store.mysql', initMysqlStore())
	.dependsOn('config', 'logger', 'mysql')
	.add('store.sakila', initSakilaStore())
	.dependsOn('config', 'logger', 'mysql');
