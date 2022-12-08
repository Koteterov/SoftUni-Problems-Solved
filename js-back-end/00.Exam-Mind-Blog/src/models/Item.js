const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Name must be filled in!"],
    minLength: [5, "Min length of title is 5 characters!"],
    maxLength: [50, "Max length of title is 50 characters!"],
  },

  image: {
    type: String,
    required: [true, "Image must be filled in!"],
    validate: {
      validator: /^https?:\/\//i,
      message: "Invalid image url",
    },
  },

  content: {
    type: String,
    required: [true, "Content must be filled in!"],
    minLength: [10, "Min length of content is 10 characters!"],
  },

  category: {
    type: String,
    required: [true, "Category must be filled in!"],
    minLength: [3, "Min length of category is 3 characters!"],
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  followList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

// •	The Title should be at least 5 characters and no longer than 50 characters
// •	The Blog Image should start with http:// or https://
// •	The Content should be a minimum of 10 characters long
// •	The Category should be a minimum of 3 characters long

// •	Title - String (required),
// •	Image: String (required),
// •	Content: String (required),
// •	Blog Category: String (required),
// •	FollowList - a collection of Users (a reference to the User model)
// •	Owner - object Id (a reference to the User model)
// Note:  When a user follows blogs, their id is added to that collection (Follow blogs)
