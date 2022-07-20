
const regSection = document.querySelector("#register-view");
const logSection = document.querySelector("#login-view");
const homeSection = document.querySelector("#home-view");

document
  .querySelector("#register-view > form")
  .addEventListener("submit", onRegister);

const welcomeSpan = document.querySelector('.email > span')

async function onRegister(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePassword = formData.get("rePass");

  if (email == "" || password == "") {
    return alert("Please fill in all fields!");
  } else if (password != rePassword) {
    return alert("Password repeated incorrectly!");
  }
  const url = `http://localhost:3030/users/register`
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
      welcomeSpan.textContent = email

      homeSection.style.display = "inline-block";


    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    return alert(error.message);
  }
  e.target.reset()
//   location.reload()
}




  export function renderRegister() {
    regSection.style.display = "inline-block";
    logSection.style.display = "none";
    homeSection.style.display = "none";


  }