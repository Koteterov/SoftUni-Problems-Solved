const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be filled in!"],
    minLength: [6, "Min length is 6 characters!"],
  },
  keyword: {
    type: String,
    required: [true, "Keyword must be filled in!"],
    minLength: [6, "Min length is 6 characters!"],
  },
  location: {
    type: String,
    required: [true, "Location must be filled in!"],
    maxLength: [15, "Max length is 15 characters!"],
  },
  date: {
    type: String,
    required: [true, "Date must be filled in!"],
    validate: {
      validator: function (name) {
        return name.length == 10;
      },
      message: "Date should be is 10 characters!",
    },
  },
  image: {
    type: String,
    required: [true, "Image must be filled in!"],
    validate: {
      validator: /^https?:\/\//i,
      message: "Invalid image url",
    },
  },
  description: {
    type: String,
    required: [true, "Description must be filled in!"],
    minLength: [8, "Min length is 8 characters!"],
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  votes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],

  rating: {
    type: [Number],
    default: 0
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

// •	Title - string (required),
// •	Keyword - string (required),
// •	Location - string (required),
// •	Date of creation - string (required),
// •	Image - string (required),
// •	Description - string (required),
// •	Author - object Id (a reference to the User model),
// •	Votes on post - a collection of Users (a reference to the User model),
// •	Rating of post - number, default value 0

//=====

// You should make the following validations while creating and editing a post:
// •	The Title and Keyword should be at least 6 characters (each).
// •	The Location should be a maximum of 15 characters long.
// •	The Date should be exactly 10 characters - "02.02.2021"
// •	The Wildlife Image should start with http:// or https://.
// •	The Description should be a minimum of 8 characters long.
