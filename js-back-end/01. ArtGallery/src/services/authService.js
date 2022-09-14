const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const { SECTRET, SALT_ROUNDS } = require("../config/constants");

exports.register = async ({ username, password, address }) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  let createdUser = User.create({
    username,
    password: hashedPassword,
    address,
  });

  return createdUser;
};

exports.login = async ({ username, password }) => {
  let user = await User.findOne({ username });

  if (!user) {
    throw new Error("Invalid user or password!");
  }
  let isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid user or password!");
  }
  return user;
};


exports.createToken = (user) => {
  const payload = { _id: user._id, username: user.username };
  const option = { expiresIn: "3d" };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECTRET, option, (err, token) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
};
