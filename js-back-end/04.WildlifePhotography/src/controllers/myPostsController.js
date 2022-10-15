const router = require("express").Router();

router.get("/", (req, res) => {
    res.locals.title = "My Posts"
    res.render("myItems");
  });
  

module.exports = router;
