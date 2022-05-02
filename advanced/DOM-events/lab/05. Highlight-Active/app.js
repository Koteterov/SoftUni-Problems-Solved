function focused() {
  let elements = document.querySelectorAll("input");
  Array.from(elements).forEach((el) => {
    el.addEventListener("focus", focus);
    el.addEventListener("blur", blur);
  });

  function focus(e) {
    e.target.parentNode.className = "focused";
  }
  function blur(e) {
    e.target.parentNode.className = "";
  }
}

