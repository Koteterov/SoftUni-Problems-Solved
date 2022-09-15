const Publication = require("../models/Publication");

exports.create = (publication) => Publication.create(publication);
exports.getAll = () => Publication.find();
exports.getOne = (picId) => Publication.findById(picId);
exports.edit = (picId, picData) =>
  Publication.findByIdAndUpdate(picId, picData, { runValidators: true });
exports.delete = (picId) => Publication.findByIdAndDelete(picId)