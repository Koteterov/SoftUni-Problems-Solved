const router = require("express").Router();
const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  res.locals.title = "Profile";

  try {
    const ownWished = await itemService.findWhished(req.user._id).lean();

    res.render("profile", { ownWished });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
