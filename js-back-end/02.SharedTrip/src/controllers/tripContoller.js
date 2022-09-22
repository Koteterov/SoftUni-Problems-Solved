const router = require("express").Router();

router.get("/", async (req, res) => {
    res.locals.title = "Shared"
    try {
      // const user = await userService.getOne(req.user._id).lean();
      // const publications = user.myPublications.map((x) => x.title).join(", ");
      // const shares = user.shares.map((x) => x.title).join(", ");
    
      res.render("shared-trips");
    
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/details", async (req,res) => {
    res.render("trip-details")
  })

  router.get("/edit", async (req,res) => {
    res.render("trip-edit")
  })

  

module.exports = router;
