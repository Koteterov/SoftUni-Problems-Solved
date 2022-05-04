function lockedProfile() {
  let buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", show);
  }

  function show(e) {

    if (
      e.target.parentElement.children[4].checked &&
      e.target.textContent == "Show more"
    ) {
      e.target.parentNode.children[9].style.display = "inline";
      e.target.textContent = "Hide it";

    } else if (e.target.parentElement.children[4].checked) {
      e.target.parentNode.children[9].style.display = "none";
      e.target.textContent = "Show more";
    }
  }
}

