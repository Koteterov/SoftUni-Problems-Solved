const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must be filled in!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password must be filled in!"],
  },
  gender: {
    type: String,
    required: [true, "Gender must be filled in!"],
    enum: ["male", "female"],
  },

  tripsHistory: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Trip",
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
