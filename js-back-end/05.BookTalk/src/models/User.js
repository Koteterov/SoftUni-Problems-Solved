const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Username must be filled in!"],
    minLength: [10, "Min length is 10 characters!"],
    unique: true,
  },

  name: {
    type: String,
    required: [true, "Name must be filled in!"],
    minLength: [4, "Min length is 10 characters!"],
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

// •	The username should be at least 4 characters long
// •	The email should be at least 10 characters long
// •	The password should be at least 3 characters long
// •	The repeat password should be equal to the password
