import { page } from "./lib.js";
import { render } from "./lib.js";

import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { searchPage } from "./views/search.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { creatPage } from "./views/creat.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { logout } from "./api/data.js";

// import * as api from "./api/data.js"
// window.api = api

document
  .querySelector("#user > a:nth-child(2)")
  .addEventListener("click", OnLogout);
const main = document.getElementById("main-content");

page(decorateContext);
page("/", homePage);
page("/catalog", catalogPage);
page("/search", searchPage);
page("/login", loginPage);
page("/register", registerPage);
page("/creat", creatPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.setUserNav = setUserNav;
  next();
}

function setUserNav() {
  const userId = sessionStorage.getItem("userId");

  if (userId != null) {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  }
}

async function OnLogout() {
  await logout();
  page.redirect("/");
  setUserNav();
}
