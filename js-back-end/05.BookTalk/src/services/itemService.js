const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = () => Item.find();
exports.getOne = (itemId) => Item.findById(itemId);
exports.edit = (itemId, itemData) =>
  Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.wishToRead = async (itemId, user) => {
  const item = await Item.findById(itemId);
  item.wishingList.push(user);
  await item.save();
  return item;
};

exports.findWhished = (userId) =>
  Item.find({
    wishingList: userId,
  });
