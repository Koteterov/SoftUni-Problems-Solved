document
  .querySelector("#register-view > form")
  .addEventListener("submit", onRegister);
const url = `http://localhost:3030/users/register`;

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

      window.location.pathname = "Exercise/05.Fisher-Game/src/index.html";
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    return alert(error.message);
  }
  e.target.reset()
}

