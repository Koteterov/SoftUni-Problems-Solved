const router = require("express").Router();

// const tripService = require("../services/tripService");
// const userService = require("../services/userService");

// const { isGuest } = require("../middlewares/guardMiddlewares");
// const errorMapper  = require("../util/errorMapper");

router.get("/", (req, res) => {
  res.locals.title = "Cteate"
  res.render("create");
});

// router.post("/", isGuest, async (req, res) => {
//   const data = req.body

  
//   try {
//     const createdTrip = await tripService.create({...data, creator: req.user._id});
//     await userService.addTrip(req.user._id, createdTrip)
    
//     res.redirect("/trip");
    
//   } catch (err) {

//     const error = errorMapper(err)
//     res.status(400).render("trip-create", { data, error });
//   }
// });

module.exports = router;
