const router = require("express").Router();

router.post("/send", (req, res) => {
  res.json({ message: "it works" });
});

module.exports = router;
