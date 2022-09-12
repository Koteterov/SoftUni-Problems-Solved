const router = require("express").Router();


router.get("/", (req, res) => {

    res.render("gallery");
});

router.get("/details", (req, res) => {

    res.render("details")
  });

router.get("/edit", (req, res) => {

    res.render("edit")
  });


router.get("/delete", (req, res) => {

  });

router.get("/share", (req, res) => {

  });


  
module.exports = router;


