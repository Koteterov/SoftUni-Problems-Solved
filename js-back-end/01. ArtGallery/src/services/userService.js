const User = require("../models/User");

exports.getOne = (userId) =>
  User.findById(userId).populate("myPublications").populate("shares");
exports.addPublication = async (userId, publicationId) => {
  const user = await User.findById(userId);

  user.myPublications.push(publicationId);
  await user.save();

  return user;
};

