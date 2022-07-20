
const loadBtn = document.querySelector(".load");
const addBtn = document.querySelector(".add");
const welcomeSpan = document.querySelector(".email > span");

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", logout);

async function logout() {

  const token = sessionStorage.getItem("userToken");

  try {
    const response = await fetch("http://localhost:3030/users/logout", {
      method: "GET",
      headers: { "X-Authorization": token },
    });

    if (response.ok) {
      sessionStorage.removeItem("userToken");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("userName");

      loadBtn.disabled = true;
      addBtn.disabled = true;

      // infoGuest.style.display = "inline-block";
      welcomeSpan.textContent = "guest";
      location.reload()

    
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log(error.message);
  }
}


const regSection = document.querySelector("#register-view");
const logSection = document.querySelector("#login-view");
const homeSection = document.querySelector("#home-view");


export function renderLogout() {
  regSection.style.display = "none";
  logSection.style.display = "none";
  homeSection.style.display = "none";
}
