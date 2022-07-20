import { renderRegister } from "./register.js";
import { renderLogIn } from "./login.js";
import { renderLogout } from "./logout.js";
import { renderHome } from "./home.js";

export function router(path) {
  if (path == "/") {
    renderHome();
  } else if (path == "/logout") {
    renderLogout();
  } else if (path == "/login") {
    renderLogIn();
  } else if (path == "/register") {
    renderRegister();
  }
}
