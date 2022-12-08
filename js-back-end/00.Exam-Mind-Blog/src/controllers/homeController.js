const router = require("express").Router();

const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  const items = await itemService.getLastThree().lean();

  res.render("Home", { items });
});

module.exports = router;
