const express = require("express");


const homeController = require("./controllers/homeController");
const galleryController = require("./controllers/galleryController")
const createController = require("./controllers/createController")
const profileController = require("./controllers/profileController")
const authController = require("./controllers/authController")


const router = express.Router();
router.get("/", homeController);
router.use("/gallery", galleryController);
router.use("/create", createController);
router.get("/profile", profileController);
router.use("/auth", authController)

router.use("*", (req, res) => {
    res.render("404");
  });
  


module.exports = router