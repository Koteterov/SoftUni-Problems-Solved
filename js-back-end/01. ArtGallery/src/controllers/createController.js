const router = require("express").Router();

const pictureService = require("../services/pictureService");
const userService = require("../services/userService");

const { isGuest } = require("../middlewares/guardMiddlewares");

router.get("/", isGuest, (req, res) => {
  res.locals.title = "Create"
  res.render("create");
});

router.post("/", isGuest, async (req, res) => {
  const data = req.body

  try {
    const createdPic = await pictureService.create({...data, author: req.user._id});
    await userService.addPublication(req.user._id, createdPic)

    res.redirect("/gallery");
    
  } catch (error) {

    res.status(400).render("create", { data, error: error.message });
  }
});

module.exports = router;
