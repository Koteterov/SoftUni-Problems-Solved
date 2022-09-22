const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must be filled in!"],
  },
  password: {
    type: String,
    required: [true, "Password must be filled in!"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },

  tripsHistory: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Trip",
    },
  ],
});


const User = mongoose.model("User", userSchema);

module.exports = User;
