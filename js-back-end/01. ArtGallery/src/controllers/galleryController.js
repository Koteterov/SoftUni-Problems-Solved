const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");

const pictureService = require("../services/pictureService");

router.get("/", async (req, res) => {
  const allPictures = await pictureService.getAll().lean();

  res.render("gallery", { allPictures });
});

router.get("/details/:picId", async (req, res) => {
  try {
    const picture = await pictureService
      .getOneDetailed(req.params.picId)
      .lean();
    const isAuthor = req.user?._id == picture.author._id;

    res.render("details", { picture, isAuthor });
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:picId", isGuest, async (req, res, next) => {
  try {
    const picture = await pictureService.getOne(req.params.picId).lean();

    console.log("autorr", picture.author);
    console.log("autorr", req.user._id);

    if (picture.author != req.user._id) {
      return next({ message: "Not authorized!", status: 401 });
    }

    res.render("edit", { picture });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:picId", isGuest, async (req, res) => {
  try {
    await pictureService.edit(req.params.picId, req.body);

    res.redirect(`/gallery/details/${req.params.picId}`);
  } catch (error) {
    const picture = await pictureService.getOne(req.params.picId).lean();
    res.status(400).render("edit", { picture, error: error.message });
  }
});

router.get("/delete/:picId", async (req, res) => {
  try {
    await pictureService.delete(req.params.picId);
    res.redirect("/gallery");
  } catch (error) {
    console.log(error);
  }
});

router.get("/share", (req, res) => {});

module.exports = router;
