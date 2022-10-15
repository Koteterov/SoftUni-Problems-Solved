const router = require("express").Router();

router.get("/", (req, res) => {
    res.locals.title = "All"
    res.render("items");
  });
  

module.exports = router;
