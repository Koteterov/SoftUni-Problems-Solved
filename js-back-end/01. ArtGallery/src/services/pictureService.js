const Publication = require("../models/Publication");

exports.create = (publication) => Publication.create(publication);
exports.getAll = () => Publication.find();
exports.getOne = (picId) => Publication.findById(picId);
