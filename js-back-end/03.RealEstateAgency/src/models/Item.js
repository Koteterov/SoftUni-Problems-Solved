const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be filled in!"],
    minLength: [6, "Min length is 6 characters!"],
  },
  type: {
    type: String,
    required: [true, "Type must be filled in!"],
    // // In case of type requirement:
    // enum: {
    //   values: ["Apartment", "Villa", "House"],
    //   message: "Please choose between Apartment, Villa and House",
    // },
  },
  year: {
    type: Number,
    required: [true, "Year must be filled in!"],
    min:[ 1850, "Year mus be between 1850 and 2021"],
    max: [2021, "Year mus be between 1850 and 2021"]
  },
  city: {
    type: String,
    required: [true, "City must be filled in!"],
    minLength: [4, "Min length is 4 characters!"],
  },
  homeImage: {
    type: String,
    required: [true, "Home image must be filled in!"],
    validate: {
      validator: /^https?:\/\//i,
      message: "Invalid image url",
    },
  },
  description: {
    type: String,
    required: [true, "Description must be filled in!"],
    maxLength: [60, "Max length is 60 characters!"],
  },
  availablePieces: {
    type: Number,
    required: [true, "Available pieces must be filled in!"],
    min: [0, "Min is 0"],
    max: [10, 'Max is 10']
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  rentedHome: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
