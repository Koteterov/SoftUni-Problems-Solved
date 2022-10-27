const Item = require("../models/Item");

exports.create = (item) => Item.create(item);
exports.getAll = (name, payment) => {
  const query = {};
  if (name) {
    query.name = new RegExp(name, "i");
  }
  if (!name && payment) {
    query.payment = new RegExp(payment, "i");
  }
  return Item.find(query);

};
exports.getOne = (itemId) => Item.findById(itemId);
exports.edit = (itemId, itemData) =>
  Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.wishToBuy = async (itemId, user) => {
  const item = await Item.findById(itemId);
  item.buyCrypto.push(user);
  await item.save();
  return item;
};
