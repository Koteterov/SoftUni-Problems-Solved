const router = require("express").Router();

router.get("/", (req, res) => {
    res.locals.title = "Profile"
    res.render("profile");
  });
  

module.exports = router;
