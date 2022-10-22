const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be filled in!"],
    minLength: [2, "Min length is 2 characters!"],
  },

  author: {
    type: String,
    required: [true, "Author must be filled in!"],
    minLength: [5, "Min length is 5 characters!"],
  },

  image: {
    type: String,
    required: [true, "Image must be filled in!"],
    validate: {
      validator: /^https?:\/\//i,
      message: "Invalid image url",
    },
  },

  review: {
    type: String,
    required: [true, "Review must be filled in!"],
    minLength: [10, "Min length is 10 characters!"],
  },

  genre: {
    type: String,
    required: [true, "Genre must be filled in!"],
    minLength: [3, "Min length is 3 characters!"],
  },

  stars: {
    type: Number,
    required: [true, "Year must be filled in!"],
    min:[ 1, "Star must be between 1 and 5"],
    max: [5, "Star must be between 1 and 5"]
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  wishingList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;


// •	Title - String (required),
// •	Author: String (required),

// •	Image: String (required),

// •	Book Review: String (required),

// •	Genre: String (required),
// •	Stars: Number (required) between 1 and 5,
// •	WishingList – a collection of Users (a reference to the User model)
// •	Owner - object Id (a reference to the User model)




// •	The Title should be at least 2 characters
// •	The Author should be at least 5 characters
// •	The Genre should be at least 3 characters
// •	The Stars should be a positive number between 1 and 5
// •	The Image should start with http:// or https://.
// •	The Review should be a minimum of 10 characters long.
