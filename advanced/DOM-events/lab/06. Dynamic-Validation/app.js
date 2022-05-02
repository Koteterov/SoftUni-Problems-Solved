function validate() {
  document.getElementById("email").addEventListener("change", onChange);
  //oninput -> validating on every keystroke!!

  function onChange(e) {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+/;
    let email = e.target.value;
    if (pattern.test(email)) {
      e.target.className = "";
    } else {
      e.target.className = "error";
    }
  }
}
