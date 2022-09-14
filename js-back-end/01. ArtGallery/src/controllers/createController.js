const router = require("express").Router();

const pictureService = require("../services/pictureService");

const { isGuest } = require("../middlewares/guardMiddlewares");

router.get("/", isGuest, (req, res) => {
  res.render("create");
});

router.post("/", isGuest, async (req, res) => {
  const data = req.body

  try {
    await pictureService.create({...data, author: req.user._id});

    res.redirect("/gallery");
    
  } catch (error) {
    console.log(error);

    res.status(400).render("create", { data, error: error.message });
  }
});

module.exports = router;
