const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");


router.get("/profile", isGuest, (req, res) => {

  res.render("profile")
});


module.exports = router;
