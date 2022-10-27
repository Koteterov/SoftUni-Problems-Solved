const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be filled in!"],
    minLength: [5, "Username must be at least 5 characters"],
  },
  email: {
    type: String,
    required: [true, "Email must be filled in!"],
    minLength: [10, "Min length is 10 characters!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password must be filled in!"],
  },
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

