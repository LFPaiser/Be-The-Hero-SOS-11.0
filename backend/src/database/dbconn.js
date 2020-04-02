const knex = require('knex');
const configuration = require('../../knexfile');

const dbconn = knex(configuration.development);

module.exports = dbconn;
