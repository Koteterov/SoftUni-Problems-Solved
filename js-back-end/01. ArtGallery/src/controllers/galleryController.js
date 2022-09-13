const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");


router.get("/", (req, res) => {

    res.render("gallery");
});

router.get("/details", isGuest, (req, res) => {

    res.render("details")
  });

router.get("/edit", isGuest, (req, res) => {

    res.render("edit")
  });


router.get("/delete", (req, res) => {

  });

router.get("/share", (req, res) => {

  });


  
module.exports = router;


