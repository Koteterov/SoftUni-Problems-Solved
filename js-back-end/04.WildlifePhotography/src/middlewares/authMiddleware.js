const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { SESSION_NAME, SECTRET } = require("../config/constants");

const jwtVeryfy = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
  let token = req.cookies[SESSION_NAME];

  if (token) {
    try {
      let decodedToken = await jwtVeryfy(token, SECTRET);
      req.user = decodedToken;
      res.locals.user = decodedToken;
    } catch (error) {
      res.clearCookie(SESSION_NAME);
      return res.redirect("/auth/login");
    }
  }

  next();
};
