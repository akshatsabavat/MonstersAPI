const { Router, response } = require("express");
const pool = require("../database");
const router = Router();

router.get("/", (request, response) => {
  pool.query("SELECT * FROM lives", (err, res) => {
    if (err) response.end(err.message);
    response.json(res.rows);
  });
});

router.get("/conditions", (request, response) => {
  pool.query(
    "SELECT * FROM habitats JOIN lives ON habitats.name = lives.habitat",
    (err, req) => {
      if (err) response.end(err.message);
      response.json(req.rows);
    }
  );
});

module.exports = router;
