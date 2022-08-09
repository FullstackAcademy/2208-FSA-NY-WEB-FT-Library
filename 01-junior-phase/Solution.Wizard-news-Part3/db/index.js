const pg = require('pg');
const client = new pg.Client('postgres://localhost/wnews');

client.connect();

module.exports = client;