const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.end("Your now on lives page");
});

module.exports = router;
