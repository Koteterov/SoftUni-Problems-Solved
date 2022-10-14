const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be filled in!"],
    validate: {
        validator: /(^[A-Z][a-z]+ [A-Z][a-z]+)/,
        message: "Invalid name!"
    },
  },
  email: {
    type: String,
    required: [true, "Username must be filled in!"],
    minLength: [5, "Min length is 5 characters!"],
    unique: true,

  },
  password: {
    type: String,
    required: [true, "Password must be filled in!"],
  },

});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
