function toggle() {
  let buttonEl = document.getElementsByClassName("button")[0];
  let divEl = document.getElementById("extra");

  buttonEl.textContent = buttonEl.textContent == "Less" ? "More" : "Less";
  divEl.style.display = divEl.style.display == "block" ? "none" : "block";


  // OR:
  // const actions = {
  //   More: "Less",
  //   Less: "More",
  //   "": "block",
  //   none: "block",
  //   block: "none",
  // };

  // buttonEl.textContent = actions[buttonEl.textContent];
  // divEl.style.display = actions[divEl.style.display];


}


// function toggle() {
//   const html = {
//       button: document.getElementsByClassName("button")[0],
//       content: document.getElementById("extra"),
//   }

//   if (html.button.innerHTML === "More") {
//       html.button.innerHTML = "Less"
//       html.content.style.display = "block"
//   } else {
//       html.button.innerHTML = "More"
//       html.content.style.display = "none"
//   }
// }