const { Router, response } = require("express");
const pool = require("../database");
const router = Router();

router.get("/", (request, response) => {
  pool.query("SELECT * FROM habitats", (err, res) => {
    if (err) response.end(err.message);
    response.json(res.rows);
  });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  pool.query("SELECT * FROM habitats WHERE id = ($1)", [id], (err, res) => {
    if (err) response.end(err.message);
    response.json(res.rows);
  });
});

module.exports = router;
