const router = require("express").Router();
const pictureService = require("../services/pictureService");

router.get("/", async (req, res) => {
  res.locals.title = "Home"

  const picturesData = await pictureService.getAll().lean()

  
  const pictures = picturesData.map(x => ({...x, shareCount: x.usersShared.length}));

  res.render("home", {pictures})
});


module.exports = router;
