const tripService = require("../services/tripService");

exports.preloadTrip = async (req, res, next) => {
  const trip = await tripService.getOne(req.params.tripId).lean();

  req.trip = trip;

  next();
};

exports.isAuthor = (req, res, next) => {
  if (req.trip.creator != req.user._id) {
    const error = ["Not authorized!"];
    return res.status(401).render("404", { error });
  }
  next();
};
