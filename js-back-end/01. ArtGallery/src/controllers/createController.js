const router = require("express").Router();

const { isGuest } = require("../middlewares/guardMiddlewares");

router.get("/create", isGuest, (req, res) => {
  res.render("create");
});

module.exports = router;
