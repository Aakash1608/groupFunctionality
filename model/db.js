const { Pool } = require('pg');

const localConfig = {
    user: 'postgres',
    password: 'Aakashs1ngh',
    host: 'localhost',
    port: 5432,
    database: 'hackathon'
};

const pool = new Pool(localConfig);

module.exports = pool