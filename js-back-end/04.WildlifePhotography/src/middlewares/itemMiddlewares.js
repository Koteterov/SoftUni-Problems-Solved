const itemService = require("../services/itemService");

exports.preloadItem = async (req, res, next) => {
  const item = await itemService.getOne(req.params.itemId).lean();

  req.item = item;

  next();
};

exports.isAuthor = (req, res, next) => {
  if (req.item.owner != req.user._id) {
    const error = ["Not authorized!"];
    return res.status(401).render("404", { error });
  }
  next();
};
