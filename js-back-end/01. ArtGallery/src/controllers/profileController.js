const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");
const userService = require("../services/userService");

router.get("/profile", isGuest, async (req, res) => {
  res.locals.title = "Profile"
  try {
    const user = await userService.getOne(req.user._id).lean();
    const publications = user.myPublications.map((x) => x.title).join(", ");
    const shares = user.shares.map((x) => x.title).join(", ");
  
    res.render("profile", { ...user, publications, shares });
  
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
