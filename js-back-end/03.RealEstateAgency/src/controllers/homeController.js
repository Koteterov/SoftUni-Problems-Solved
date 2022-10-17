const router = require("express").Router();

const itemService = require("../services/itemService");

router.get("/", async (req, res) => {
  const houses = await itemService.getLastThree().lean();

  res.render("Home", { houses });
});

module.exports = router;
