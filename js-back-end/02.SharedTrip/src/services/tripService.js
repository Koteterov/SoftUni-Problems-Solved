const Trip = require("../models/Trip");

exports.create = (trip) => Trip.create(trip);
exports.getAll = () => Trip.find();
exports.getOne = (tripId) => Trip.findById(tripId);
exports.edit = (tripId, tripData) =>
  Trip.findByIdAndUpdate(tripId, tripData, { runValidators: true });
exports.delete = (tripId) => Trip.findByIdAndDelete(tripId);

exports.joinTrip = async (tripId, userEmail) => {
  const trip = await Trip.findById(tripId);
  trip.buddies.push(userEmail);
  trip.seats -= 1
  await trip.save();
  return trip;
};
