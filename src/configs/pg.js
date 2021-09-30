const { Pool } = require('pg')

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'guthbarber-db',
    password: '123456',
    port: 5432,
})

module.exports = { query: (text, params) => pool.query(text, params)}  