const User = require("../models/User");

exports.getOne = (userId) => User.findById(userId);
exports.addTrip = async (userId, tripId) => {
  const user = await User.findById(userId);

  user.tripsHistory.push(tripId);
  await user.save();

  return user;
};
exports.getDriver = (tripId) => User.findOne({ tripsHistory: tripId });
