const router = require("express").Router();

router.get("/", (req, res) => {
    res.locals.title = "Search"
    res.render("search");
  });
  

module.exports = router;
