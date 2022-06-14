const { Router } = require("express");
const pool = require("../database");
const router = Router();

router.get("/", (request, response) => {
  pool.query("SELECT * FROM habitats", (err, res) => {
    if (err) response.end(err.message);
    response.json(res.rows);
  });
});

module.exports = router;
