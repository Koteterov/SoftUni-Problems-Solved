const router = require("express").Router();

const itemService = require("../services/itemService");
const { preloadItem, isAuthor } = require("../middlewares/itemMiddlewares");
const {isGuest} = require ("../middlewares/guardMiddlewares")

const errorMapper = require("../util/errorMapper");


router.get("/", async (req, res) => {
  res.locals.title = "House for Rent";
  const items = await itemService.getAll().lean();

  res.render("items", { items });
});

router.get("/details/:itemId", async (req, res) => {
  const item = await itemService.getOne(req.params.itemId).lean();
  const isCreator = item.owner == req.user?._id;

  res.render("details", { item, isCreator });
});

router.get("/edit/:itemId", preloadItem, isAuthor, async (req, res) => {
  try {
    const item = req.item;

    res.render("edit", { item });
  } catch (error) {
    console.log(error);
  }
});

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

module.exports = router;
