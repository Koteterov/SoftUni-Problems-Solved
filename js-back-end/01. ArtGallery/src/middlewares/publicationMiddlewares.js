const pictureService = require("../services/pictureService");

exports.preloadPublication = async (req, res, next) => {
  const picture = await pictureService.getOne(req.params.picId).lean();

  req.picture = picture;

  next();
};

exports.isAuthor = (req, res, next) => {
  if (req.picture.author != req.user._id) {
    return next({ message: "Not authorized!", status: 401 });
  }
  next();
};
