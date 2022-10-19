const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Name must be filled in!"],
    minLength: [3, "Min length is 3 characters!"],
    validate: {
      validator: /^[A-Za-z]+$/i,
      message: "Only lattin letter accepted",
    },

  },
  lastName: {
    type: String,
    required: [true, "Name must be filled in!"],
    minLength: [5, "Min length is 5 characters!"],
    validate: {
      validator: /^[A-Za-z]+$/i,
      message: "Only lattin letter accepted",
    },

  },

  email: {
    type: String,
    required: [true, "Username must be filled in!"],
    minLength: [5, "Min length is 5 characters!"],
    unique: true,
    validate: {
      validator: /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/i,
      message: "Only lattin letter accepted",
    },

  },
  password: {
    type: String,
    required: [true, "Password must be filled in!"],
  },

  myPosts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Item",
    },
  ],
});

userSchema.index(
  { email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

