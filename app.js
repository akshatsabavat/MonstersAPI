const express = require("express");
const pool = require("./database");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get("/monsters", (request, response) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC", (err, res) => {
    if (err) console.log(err);
    response.json(res.rows);
  });
});

app.listen(port, () => {
  console.log(`Server fired up on port:${port}`);
});
