const express = require("express");


const homeController = require("./controllers/homeController");
const offerController = require("./controllers/offerController")
const profileController = require("./controllers/profileController")
const authController = require("./controllers/authController")
const tripController = require("./controllers/tripContoller")


const router = express.Router();
router.get("/", homeController);
router.get("/profile", profileController);
router.use("/trip", tripController);
router.use("/offer", offerController)
router.use("/auth", authController)

router.use("*", (req, res) => {
    res.render("404");
  });
  


module.exports = router