const router = require("express").Router();

const userService = require("../services/userService");
const tripService = require("../services/tripService");
const errorMapper = require("../util/errorMapper");

router.get("/", async (req, res) => {
  res.locals.title = "Shared";
  try {
    const allTrips = await tripService.getAll().lean();
    res.render("shared-trips", { allTrips });
  } catch (error) {
    console.log(error);
  }
});

router.get("/details/:tripId", async (req, res) => {
  try {
    const trip = await tripService.getOne(req.params.tripId).lean();
    const driver = await userService.getDriver(trip._id).lean();
    const user = await userService.getOne(req.user._id);

    const isCreator = user.tripsHistory.some((x) => x == req.params.tripId);

    res.render("trip-details", { trip, driver, isCreator });
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:tripId", async (req, res) => {
  try {
    const trip = await tripService.getOne(req.params.tripId).lean();

    res.render("trip-edit", { trip });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:tripId", async (req, res) => {
  try {
    await tripService.edit(req.params.tripId, req.body);
    res.redirect(`/trip/details/${req.params.tripId}`);
  } catch (err) {
    const error = errorMapper(err);

    trip = req.body;
    res.status(400).render("trip-edit", { trip, error });
  }
});

router.get("/delete/:tripId", async (req, res) => {
  try {
    await tripService.delete(req.params.tripId);
    res.redirect("/trip");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
