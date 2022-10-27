const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be filled in!"],
    minLength: [2, "Min length of name is 2 characters!"],
  },

  price: {
    type: Number,
    required: [true, "Price must be filled in!"],
    min: [0, "Price must ne a positive number"],
  },

  image: {
    type: String,
    required: [true, "Image must be filled in!"],
    validate: {
      validator: /^https?:\/\//i,
      message: "Invalid image url",
    },
  },

  description: {
    type: String,
    required: [true, "Description must be filled in!"],
    minLength: [10, "Description min length is 10 characters!"],
  },

  payment: {
    type: String,
    required: [true, "Payment must be selected!"],
    enum: {
      values: ["crypto-wallet", "credit-card", "debit-card", "paypal"],
      message: "{VALUE} is not supported",
    },
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  buyCrypto: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

// •	The Name should be at least two characters
// •	The Price should be a positive number
// •	The Crypto Image should start with http:// or https://.
// •	The Description should be a minimum of 10 characters long.
// •	The Payment Method must be one of the options

// •	Name - String (required),
// •	Image: String (required),
// •	Price: Number (required),
// •	Crypto Description: String (required),
// •	Payment Method: String (crypto-wallet, credit-card, debit-card, paypal) required,
// •	Buy a crypto - a collection of Users (a reference to the User model)
// •	Owner - object Id (a reference to the User model)
// Note:  When a user buys crypto, their id is added to that collection (Buy a crypto)
