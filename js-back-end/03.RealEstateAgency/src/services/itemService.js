const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = (search) => {
  const query = {}
  if (search) {
    query.type = new RegExp(search, 'i')
  }
  return Item.find(query)
};
exports.getLastThree = () => Item.find().sort({ _id: -1 }).limit(3);
exports.getOne = (itemId) => Item.findById(itemId);
exports.edit = (itemId, itemData) =>
  Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.rentItem = async (itemId, userName) => {
  const item = await Item.findById(itemId);
  item.rentedHome.push(userName);
  item.availablePieces -= 1
  await item.save();
  return item;
};
