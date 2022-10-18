const router = require("express").Router();
const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  try {
    const result = await itemService.getAll(req.query.search).lean();
    const searchStr = req.query.search;

    res.locals.title = "Search";
    res.render("search", { result, searchStr });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
