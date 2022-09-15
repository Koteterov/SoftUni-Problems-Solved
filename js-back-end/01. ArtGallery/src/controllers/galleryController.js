const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");

const pictureService = require("../services/pictureService");

router.get("/", async (req, res) => {
  const allPictures = await pictureService.getAll().lean();

  res.render("gallery", { allPictures });
});

router.get("/details/:picId", async (req, res) => {
  try {
    const picture = await pictureService.getOne(req.params.picId).lean();
    const isAuthor = req.user?._id == picture.author


    res.render("details", { picture, isAuthor });
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:picId", isGuest, async (req, res) => {
  try {
    const picture = await pictureService.getOne(req.params.picId).lean();

    res.render("edit", { picture });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:picId", isGuest, async (req, res) => {
  try {
    await pictureService.edit(req.params.picId, req.body)
    
    res.redirect(`/gallery/details/${req.params.picId}`)
  } catch (error) {
    res.status(400).render("edit", { error: error.message });
  }
});

router.get("/delete", (req, res) => {});

router.get("/share", (req, res) => {});

module.exports = router;
