

document
  .querySelector("#login-view > form")
  .addEventListener("submit", onLogin);

const url = `http://localhost:3030/users/login`;


async function onLogin(e) {
  e.preventDefault();
  const welcomeSpan = document.querySelector('.email > span')
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
      welcomeSpan.textContent = email

      window.location.pathname = "Exercise/05.Fisher-Game/src/index.html";
    } else {
      throw new Error(data.message);
    }

  } catch (error) {
    console.log(error.message);
    return alert(error.message);
  }
  e.target.reset()
}

