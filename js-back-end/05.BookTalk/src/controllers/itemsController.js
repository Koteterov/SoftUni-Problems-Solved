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
      // .populate("owner")
      // .populate("votes");
    const isCreator = item.owner._id == req.user?._id;

    // const hasVotes = item.votes.length > 0;
    // const hasAlreadyVoted = item.votes.some((x) => x?._id == req.user?._id);
    // const peopleVoted = item.votes.map((x) => x.email).join(", ");


    res.render("details", {
      item,
      isCreator,
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

// router.get("/vote-up/:itemId", isGuest, async (req, res) => {
//   try {
//     await itemService.upVote(req.params.itemId, req.user._id);
//     res.redirect(`/items/details/${req.params.itemId}`);
//   } catch (err) {
//     const error = errorMapper(err);

//     item = req.body;
//     res.status(400).render("details", { item, error });
//   }
// });

// router.get("/vote-down/:itemId", isGuest, async (req, res) => {
//   try {
//     await itemService.downVote(req.params.itemId, req.user._id);
//     res.redirect(`/items/details/${req.params.itemId}`);
//   } catch (err) {
//     const error = errorMapper(err);

//     item = req.body;
//     res.status(400).render("details", { item, error });
//   }
// });

module.exports = router;
