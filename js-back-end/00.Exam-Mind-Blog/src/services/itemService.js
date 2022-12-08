const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = () => Item.find();
exports.getLastThree = () => Item.find().sort({ _id: -1 }).limit(3);
exports.getOne = (itemId) => Item.findById(itemId);
exports.edit = (itemId, itemData) =>
  Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.wishToFollow = async (itemId, user) => {
  const item = await Item.findById(itemId);
  item.followList.push(user);
  await item.save();
  return item;
};

exports.findOwn = (userId) =>
  Item.find({
    owner: userId,
  });
exports.findOwnFollows = (userId) =>
  Item.find({
    followList: userId,
  });
