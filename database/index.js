const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "monsters",
  password: "Waterbuild123",
});

pool.connect();

module.exports = pool;
