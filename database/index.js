const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "monsters",
  password: "Waterbuild123",
});

pool.connect();

//all queries will be written or desgined in the pool module
pool.query("SELECT * FROM monsters", (err, res) => {
  if (err) console.log(err);
  console.log(res);
});
