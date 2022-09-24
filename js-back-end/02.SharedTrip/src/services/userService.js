const User = require("../models/User");

exports.addTrip = async (userId, tripId) => {
  const user = await User.findById(userId);

  user.tripsHistory.push(tripId);
  await user.save();

  return user;
};

