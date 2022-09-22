const router = require("express").Router();
const authService = require("../services/authService");

const { isGuest, isUser } = require("../middlewares/guardMiddlewares");

const { SESSION_NAME } = require("../config/constants");

router.get("/register", isUser, (req, res) => {
  
  res.locals.title = "Register"
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  

  try {
    if (req.body.password < 4) {
      throw new Error("Password should be at least 4 characters long!");
    }

    if (req.body.password != req.body.rePassword) {
      throw new Error("Passwords don't match!");
    }

    const createdUser = await authService.register(req.body);
    let token = await authService.createToken(createdUser);

    if (!token) {
      throw new Error("Invalid user or password!");
    }
    res.cookie(SESSION_NAME, token, { httpOnly: true });
    res.redirect("/");

  } catch (error) {
    const userData = req.body;
    res
    .status(400)
    .render("auth/register", { userData, error: error.message });

  }
});

router.get("/login", isUser, (req, res) => {
  res.locals.title = "Login"

  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  try {
    let user = await authService.login(req.body);
    let token = await authService.createToken(user);

    if (!token) {
      throw new Error("Invalid user or password!");
    }
    res.cookie(SESSION_NAME, token, { httpOnly: true });
    res.redirect("/");

  } catch (error) {
    const userData = req.body;
    res.status(400).render("auth/login", { userData, error: error.message });
  }
});

router.get("/logout", isGuest, (req, res) => {
  res.clearCookie(SESSION_NAME);
  res.redirect("/");
});

module.exports = router;
