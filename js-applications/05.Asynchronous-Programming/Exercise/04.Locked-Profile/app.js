async function lockedProfile() {
  const divUser = document.querySelector(".user1Username");
  const main = document.getElementById("main");
  const profile = document.querySelector(".profile");

  divUser.style.display = "none";

  const url = "http://localhost:3030/jsonstore/advanced/profiles";

  const response = await fetch(url);
  const result = await response.json();

  Object.values(result).forEach(() => {
    let newProfile = profile.cloneNode(true);
    main.appendChild(newProfile);
  });
  main.lastChild.remove();

  const lockBtns = document.querySelectorAll(
    'div.profile > input[type="radio"][value="lock"]'
  );
  const unlockBtns = document.querySelectorAll(
    'div.profile > input[type="radio"][value="unlock"]'
  );

  const showBtns = document.getElementsByTagName("button");
  const user = document.querySelectorAll("div.profile > input:nth-child(9)");
  const email = document.querySelectorAll(
    "div.profile > div:nth-child(10) > input:nth-child(3)"
  );
  const age = document.querySelectorAll(
    "div.profile > div:nth-child(10) > input:nth-child(5)"
  );

  Object.values(result).forEach((x, i) => {
    user[i].value = x.username;
    user[i].name = `user${i + 1}Username`;

    email[i].value = x.email;
    email[i].name = `user${i + 1}Username`;

    age[i].value = x.age;
    age[i].name = `user${i + 1}Username`;

    lockBtns[i].name = `user${i + 1}Username`;
    unlockBtns[i].name = `user${i + 1}Username`;

  });

  Array.from(showBtns).forEach((b) => b.addEventListener("click", show));

  function show(e) {
    if (e.target.parentElement.children[4].checked) {
      e.target.parentElement.children[9].style.display =
        e.target.parentElement.children[9].style.display == "block"
          ? "none"
          : "block";
      e.target.textContent =
        e.target.textContent == "Show more" ? "Hide it" : "Show more";
    }
  }
}




