const express = require("express");

const homeController = require("./controllers/homeController");
const createController = require("./controllers/createController")
const itemsController = require("./controllers/itemsController")
const authController = require("./controllers/authController")
const myPostsController = require("./controllers/myPostsController")


const router = express.Router();
router.get("/", homeController);
router.use("/items", itemsController);
router.use("/create", createController)
router.use("/auth", authController)
router.use("/my-items", myPostsController)

router.use("*", (req, res) => {
    res.render("404");
  });
  


module.exports = router