const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required:  [true, "Username must be filled in!"],
    unique: true,  
  },
  password: {
    type: String,
    required: [true, "Password is required!"]
  },
  address: {
    type: String,
    required: [true, "Address field is required!"]
  },

  myPublications: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Publication",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
