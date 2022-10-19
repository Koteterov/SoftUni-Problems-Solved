const router = require("express").Router();

const itemService = require("../services/itemService");

const { isGuest } = require("../middlewares/guardMiddlewares");
const errorMapper  = require("../util/errorMapper");

router.get("/", isGuest, (req, res) => {
  res.locals.title = "Create"
  res.render("create");
});

router.post("/", isGuest, async (req, res) => {
  const data = req.body

  
  try {
    await itemService.create({...data, owner: req.user._id});
    
    res.redirect("/items");
    
  } catch (err) {

    const error = errorMapper(err)
    res.status(400).render("create", { data, error });
  }
});

module.exports = router;
