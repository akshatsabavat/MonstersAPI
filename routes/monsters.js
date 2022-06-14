const { Router, response } = require("express");
const pool = require("../database");

const router = Router();

router.get("/", (request, response) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC;", (err, res) => {
    if (err) response.end(err.message);
    response.json(res.rows);
    console.log(res.rows);
  });
});

router.post("/", (request, response) => {
  const { name, personality } = request.body;
  pool.query(
    "INSERT INTO monsters(name, personality) VALUES($1, $2)",
    [name, personality],
    (err, res) => {
      if (err) console.log(err);
      response.redirect("/monsters");
    }
  );
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  pool.query("DELETE FROM monsters WHERE id=($1)", [id], (err, res) => {
    if (err) console.log(err);
    response.redirect("/monsters");
  });
});

module.exports = router;
