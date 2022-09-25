const router = require("express").Router();
const { isGuest } = require("../middlewares/guardMiddlewares");
const userService = require("../services/userService");

router.get("/profile", isGuest, async (req, res) => {
  res.locals.title = "Profile";
  try {
    const user = await userService
      .getOne(req.user._id)
      .lean()
      .populate("tripsHistory");
    const gender = user.gender;
    const email = user.email;
    const tripsHistory = user.tripsHistory.length;
    const showTrips = tripsHistory > 0;
    const trips = user.tripsHistory;

    res.render("profile", { gender, email, tripsHistory, showTrips, trips });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
