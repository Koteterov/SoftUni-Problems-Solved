const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  startPoint: {
    type: String,
    required: [true, "Start Point must be filled in!"],
    minLength: [4, "Min length is 4 symbols!"]
  },
  endPoint: {
    type: String,
    required: [true, "End Point must be filled in!"],
    minLength: [4, "Min length is 4 symbols!"]

  },
  date: {
    type: String,
    required: [true, "Date must be filled in!"],
  },
  time: {
    type: String,
    required: [true, "Time must be filled in!"],
  },
  carImage: {
    type: String,
    required: [true, "Car Image must be filled in!"],
    validate: {
      validator: /^https?/,
      message: "Invalid image url",
    }

  },
  carBrand: {
    type: String,
    required: [true, "Car Brand must be filled in!"],
    minLength: [4, "Min length is 4 symbols!"]

  },
  seats: {
    type: Number,
    required: [true, "Seats must be filled in!"],
    min: [0, "Min seats is 0!"],
    max: [4, "Max seats is 4!"],

  },
  price: {
    type: Number,
    required: [true, "Price must be filled in!"],
    min: [1, "Min price is 1!"],
    max: [50, "Max price is 50!"],

  },
  description: {
    type: String,
    required: [true, "Description must be filled in!"],
    minLength: [10, "Min length is 10 symbols!"]

  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  buddies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;


// •	Start Point - string (required),
// •	End Point – string (required),
// •	Date – string (required),
// •	Time – string (required),
// •	Car Image – string (required),
// •	Car Brand – string (required),
// •	Seats – number (required),
// •	Price – number (required),
// •	Description – string (required),
// •	Creator – object Id (reference to the User model),
// •	Buddies – a collection of Users (reference to the User model)
// Note: When a user joined the given trip, a reference to that user is added to that collection (Buddies).
// Implement the entities with the correct data types.
