const router = require("express").Router();
const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  try {
    let name = req.query.name;
    let payment = req.query.payment;

    const result = await itemService.getAll(name, payment).lean();
    const searchStr = req.query.name;

    res.locals.title = "Search";
    res.render("search", { result, searchStr });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
