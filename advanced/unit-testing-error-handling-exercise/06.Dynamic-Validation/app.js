function validate() {
  let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
  let input = document.getElementById("email");

  input.addEventListener("change", onChange);

  function onChange() {
    if (!emailPattern.test(input.value)) {
      input.classList = "error";
    } else {
      input.classList = "";
    }
  }
}

// OR:
// function validate() {
//   const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
//   document.getElementById("email").addEventListener("change", onChange);

//   function onChange(e) {
//     const input = e.target;
//     if (!emailPattern.test(input.value)) {
//       input.className = "error";
//     } else {
//       input.className = "";
//     }
//   }
// }
