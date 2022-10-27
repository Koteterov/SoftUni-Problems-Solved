const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = () => Item.find();
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
