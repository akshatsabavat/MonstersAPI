const { Router } = require("express");
const pool = require("../database");

const router = Router();

router.get("/monsters", (request, response) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC;", (err, res) => {
    if (err) console.log(err);
    response.json(res.rows);
    console.log(res.rows);
  });
});

module.exports = router;
