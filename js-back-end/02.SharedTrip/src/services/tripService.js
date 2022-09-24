const Trip = require("../models/Trip");

exports.create = (trip) => Trip.create(trip);

