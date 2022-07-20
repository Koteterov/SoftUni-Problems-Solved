import { load } from "./home.js";

const regSection = document.querySelector("#register-view");
const logSection = document.querySelector("#login-view");
const homeSection = document.querySelector("#home-view");
const welcomeSpan = document.querySelector(".email > span");

const loadBtn = document.querySelector(".load");
const addBtn = document.querySelector(".add");


document
  .querySelector("#login-view > form")
  .addEventListener("submit", onLogin);

const url = `http://localhost:3030/users/login`;

export async function onLogin(e) {

  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status == 200) {
      sessionStorage.setItem("userToken", data.accessToken);
      sessionStorage.setItem("userId", data._id);
      sessionStorage.setItem("userName", data.email);
      welcomeSpan.textContent = email;
      homeSection.style.display = "inline-block";
      logSection.style.display = "none";
    
     

      addBtn.disabled = false;
      loadBtn.disabled = false;


    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log(error.message);
    return alert(error.message);
  }
  e.target.reset();
  load()
  location.reload()
}

export function renderLogIn() {
  logSection.style.display = "inline-block";
  regSection.style.display = "none";
  homeSection.style.display = "none";
}
