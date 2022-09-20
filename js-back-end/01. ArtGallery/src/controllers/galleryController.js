const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");
const {
  preloadPublication,
  isAuthor,
} = require("../middlewares/publicationMiddlewares");

const pictureService = require("../services/pictureService");
const userService = require("../services/userService");

router.get("/", async (req, res) => {
  const allPictures = await pictureService.getAll().lean();

  res.render("gallery", { allPictures });
});

router.get("/details/:picId", async (req, res) => {
  try {
    const picture = await pictureService
      .getOneDetailed(req.params.picId)
      .lean();
    const isAuthor = req.user?._id == picture.author?._id;
    
    const isShared = picture.usersShared.some(x => x == req.user?._id)


    res.render("details", { picture, isAuthor, isShared });
  } catch (error) {
    console.log(error);
  }
});

router.get(
  "/edit/:picId",
  isGuest,
  preloadPublication,
  isAuthor,
  async (req, res) => {
    try {
      const picture = req.picture;
      res.render("edit", { picture });
    } catch (error) {
      console.log(error);
    }
  }
);

router.post(
  "/edit/:picId",
  isGuest,
  preloadPublication,
  isAuthor,
  async (req, res) => {
    try {
      await pictureService.edit(req.params.picId, req.body);

      res.redirect(`/gallery/details/${req.params.picId}`);
    } catch (error) {
      picture = req.body;
      res.status(400).render("edit", { picture, error: error.message });
    }
  }
);

router.get(
  "/delete/:picId",
  isGuest,
  preloadPublication,
  isAuthor,
  async (req, res) => {
    try {
      await pictureService.delete(req.params.picId);
      res.redirect("/gallery");
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/share/:picId", isGuest, async (req, res) => {

  const picture = await pictureService.getOne(req.params.picId);
  picture.usersShared.push(req.user._id);

  const user = await userService.getOne(req.user._id)
  user.shares.push(picture)

  await picture.save();
  await user.save();

  res.redirect("/");
});

module.exports = router;
