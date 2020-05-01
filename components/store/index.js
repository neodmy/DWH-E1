const System = require('systemic');
const initMetadataStore = require('./metadataStore');
const initMysqlStore = require('./mysqlStore');
const initObjectiveStore = require('./objectiveStore');
const initRegisterStore = require('./registerStore');

module.exports = new System({ name: 'store' })
	.add('store.metadata', initMetadataStore())
	.dependsOn('config', 'logger', 'mysql')
	.add('store.mysql', initMysqlStore())
	.dependsOn('config', 'logger', 'mysql')
	.add('store.objective', initObjectiveStore())
	.dependsOn('config', 'logger', 'mysql')
	.add('store.register', initRegisterStore())
	.dependsOn('config', 'logger', 'mysql')
	.add('store')
	.dependsOn(
		{ component: 'store.metadata', destination: 'metadata' },
		{ component: 'store.mysql', destination: 'mysql' },
		{ component: 'store.objective', destination: 'objective' },
		{ component: 'store.register', destination: 'register' },
	);
