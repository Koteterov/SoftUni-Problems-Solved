const router = require("express").Router();
const itemService = require("../services/itemService");
const { isGuest } = require("../middlewares/guardMiddlewares");


router.get("/", isGuest, async (req, res) => {
  res.locals.title = "My Posts";

  try {
    const myItems = await itemService
      .getOwnItems(req.user._id)
      .lean()
      .populate("owner");

    res.render("myItems", { myItems });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
