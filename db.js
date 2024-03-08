const dotenv = require('dotenv')

const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'nickshakh',
    host:'localhost',
    port:5432,
    database:'node_postgress',
})


module.exports = pool