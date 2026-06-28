const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'acmf trabalho dw',
  user: 'postgres',
  password: 'vermelho123',
});

module.exports = pool;