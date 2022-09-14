const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");

const pictureService = require("../services/pictureService");

router.get("/", async (req, res) => {
  const allPictures = await pictureService.getAll().lean();

  res.render("gallery", { allPictures });
});

router.get("/details/:picId", isGuest, async (req, res) => {
  try {
    const picture = await pictureService.getOne(req.params.picId).lean();


    res.render("details", { picture });

  } catch (error) {
    console.log(error);
  }
});

router.get("/edit", isGuest, (req, res) => {
  res.render("edit");
});

router.get("/delete", (req, res) => {});

router.get("/share", (req, res) => {});

module.exports = router;
