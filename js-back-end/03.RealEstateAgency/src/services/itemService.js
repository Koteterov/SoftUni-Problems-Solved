const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = () => Item.find();
exports.getLastThree = () => Item.find().sort({ _id: -1 }).limit(3);
exports.getOne = (itemId) => Item.findById(itemId);
exports.edit = (itemId, itemData) =>
  Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

// exports.joinTrip = async (itemId, userEmail) => {
//   const trip = await Item.findById(itemId);
//   trip.buddies.push(userEmail);
//   trip.seats -= 1
//   await trip.save();
//   return trip;
// };
