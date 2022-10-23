const router = require("express").Router();

const itemService = require("../services/itemService");
const { preloadItem, isAuthor } = require("../middlewares/itemMiddlewares");
const { isGuest } = require("../middlewares/guardMiddlewares");

const errorMapper = require("../util/errorMapper");

router.get("/", async (req, res) => {
  res.locals.title = "All";
  const items = await itemService.getAll().lean();

  res.render("items", { items });
});

router.get("/details/:itemId", async (req, res) => {
  try {
    const item = await itemService
      .getOne(req.params.itemId)
      .lean()
      .populate("wishingList");
    const isCreator = item.owner._id == req.user?._id;
    const hasAlreadyWished = item.wishingList.some((x) => x?._id == req.user?._id);

    res.render("details", {
      item,
      isCreator,
      hasAlreadyWished
    });
  } catch (error) {
    console.log(error);
  }
});

router.get(
  "/edit/:itemId",
  isGuest,
  preloadItem,
  isAuthor,
  async (req, res) => {
    try {
      const item = req.item;

      res.render("edit", { item });
    } catch (error) {
      console.log(error);
    }
  }
);

router.post(
  "/edit/:itemId",
  isGuest,
  preloadItem,
  isAuthor,
  async (req, res) => {
    try {
      await itemService.edit(req.params.itemId, req.body);
      res.redirect(`/items/details/${req.params.itemId}`);
    } catch (err) {
      const error = errorMapper(err);

      item = req.body;
      res.status(400).render("edit", { item, error });
    }
  }
);

router.get(
  "/delete/:itemId",
  isGuest,
  preloadItem,
  isAuthor,
  async (req, res) => {
    try {
      await itemService.delete(req.params.itemId);
      res.redirect("/items");
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/wish/:itemId", isGuest, async (req, res) => {
  try {
    await itemService.wishToRead(req.params.itemId, req.user._id);
    res.redirect(`/items/details/${req.params.itemId}`);
  } catch (err) {
    const error = errorMapper(err);

    item = req.body;
    res.status(400).render("details", { item, error });
  }
});


module.exports = router;
