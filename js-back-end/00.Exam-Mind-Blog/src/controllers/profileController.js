const router = require("express").Router();
const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  res.locals.title = "Profile";

  const ownFollows = await itemService.findOwnFollows(req.user._id).lean();

  const ownItems = await itemService.findOwn(req.user._id).lean();
  const nrOfOwn = ownItems.length;
  const nrOfOwnFollows = ownFollows.length


  res.render("profile", { ownItems, nrOfOwn, nrOfOwnFollows, ownFollows });
});

module.exports = router;
