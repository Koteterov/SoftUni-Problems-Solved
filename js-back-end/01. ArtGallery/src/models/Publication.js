const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  technique: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  certificate: {
    type: String,
    enum: ["Yes", "No"],
    required: true,
  },

  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  usersShared: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = Publication;
