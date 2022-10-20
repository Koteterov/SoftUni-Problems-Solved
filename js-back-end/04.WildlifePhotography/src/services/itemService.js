const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = () => Item.find();
exports.getOne = (itemId) => Item.findById(itemId);
exports.edit = (itemId, itemData) =>
  Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.upVote = async (itemId, userId) => {
  const item = await Item.findById(itemId);
  item.votes.push(userId);
  item.rating ++
  await item.save();
  return item;
};
exports.downVote = async (itemId, userId) => {
  const item = await Item.findById(itemId);
  item.votes.push(userId);
  item.rating --
  await item.save();
  return item;
};

exports.getOwnItems = (userId) => Item.find({owner: userId})