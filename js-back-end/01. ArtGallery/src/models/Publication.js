const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [6, "Title should be a minimum of 6 characters long"],
  },
  technique: {
    type: String,
    required: true,
    maxLength: [
      15,
      "Painting technique should be a maximum of 15 characters long",
    ],
  },
  pictureUrl: {
    type: String,
    required: true,
    validate: {
      validator: /^https?:\/\//i,
      message: "Invalid image url",
    },
  },
  certificate: {
    type: String,
    enum: ["Yes", "No"],
    required: [
      true,
      "Certificate of authenticity there must be value 'Yes' or 'No'",
    ],
  },

  usersShared: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],

  author: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }

});

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = Publication;
