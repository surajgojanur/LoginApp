const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourUser',
  host: 'localhost',
  database: 'yourDatabase',
  password: 'yourPassword',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
