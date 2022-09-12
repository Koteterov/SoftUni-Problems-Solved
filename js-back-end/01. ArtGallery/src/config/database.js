const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/galleryCollection";

exports.initializeDatabase = () => mongoose.connect(connectionString);