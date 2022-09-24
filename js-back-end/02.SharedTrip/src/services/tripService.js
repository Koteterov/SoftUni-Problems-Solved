const Trip = require("../models/Trip");

exports.create = (trip) => Trip.create(trip);
exports.getAll = () => Trip.find()
exports.getOne = (tripId) => Trip.findById(tripId);
exports.edit = (tripId, tripData) => Trip.findByIdAndUpdate(tripId, tripData, { runValidators: true });
exports.delete = (tripId) => Trip.findByIdAndDelete(tripId);




