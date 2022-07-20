import { router } from "./router.js";

const regSection = document.querySelector("#register-view");
const logSection = document.querySelector("#login-view");
const homeSection = document.querySelector("#home-view");

regSection.style.display = "none";
logSection.style.display = "none";
homeSection.style.display = "none";

const navEl = document.querySelector("body > header:nth-child(1) > nav");
navEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName == "A") {
    let url = new URL(e.target.href);

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    router(url.pathname);
  }
});
