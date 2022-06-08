/* Configuração de conexão com o BD */

const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "sucesso7",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool