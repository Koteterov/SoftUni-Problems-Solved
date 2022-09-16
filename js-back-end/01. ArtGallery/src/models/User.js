const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be filled in!"],
    minLength: [4, "Min length is 4 symbols"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  address: {
    type: String,
    required: [true, "Address field is required!"],
    maxLength: [20, "Max number of symbols is 20"],
  },

  myPublications: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Publication",
    },
  ],
  shares: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Publication",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
