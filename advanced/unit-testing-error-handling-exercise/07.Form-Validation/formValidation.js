function validate() {
    const userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const passWordPattern = /^\w{5,15}$/;
    const emailPattern = /@(\w)*\./;
    const submitButton = document.getElementById("submit");
  
    const userInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("password");
    const confirmPassInput = document.getElementById("confirm-password");
    const checkbox = document.getElementById("company");
    const companyInfo = document.getElementById("companyInfo");
    const companyNumberInput = document.getElementById("companyNumber");
    const validInfo = document.getElementById("valid");
  
    checkbox.addEventListener("change", onChange);
  
    function onChange(e) {
      if (e.target.checked == true) {
        companyInfo.style.display = "block";
      } else {
        companyInfo.style.display = "none";
      }
    }
  
    submitButton.addEventListener("click", onClick);
  
    let isCorrect;
  
    function onClick(e) {
      isCorrect = true;
      e.preventDefault();
  
      checkValid(userInput, userNamePattern);
      checkValid(emailInput, emailPattern);
      checkValid(passInput, passWordPattern);
      checkValid(confirmPassInput, passWordPattern);
  
      if (passInput.value != confirmPassInput.value) {
        passInput.style.borderColor = "red";
        confirmPassInput.style.borderColor = "red";
        isCorrect = false;
      }
      if (checkbox.checked == true) {
        if (companyNumberInput.value < 1000 || companyNumberInput.value > 9999) {
          companyNumberInput.style.borderColor = "red";
          isCorrect = false;
        } else {
          companyNumberInput.style.borderColor = "";
        }
      }
      if (isCorrect) {
        validInfo.style.display = "block";
      } else {
        validInfo.style.display = "none";
      }
    }
  
    function checkValid(element, pattern) {
      if (pattern.test(element.value) == false) {
        element.style.borderColor = "red";
        isCorrect = false;
      } else {
        element.style.borderColor = "";
      }
    }
  }


//OR:
// function validate() {
//   const userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
//   const passWordPattern = /^\w{5,15}$/;
//   const emailPattern = /@(\w)*\./;
//   const submitButton = document.getElementById("submit");

//   const userInput = document.getElementById("username");
//   const emailInput = document.getElementById("email");
//   const passInput = document.getElementById("password");
//   const confirmPassInput = document.getElementById("confirm-password");
//   const checkbox = document.getElementById("company");
//   const companyInfo = document.getElementById("companyInfo");
//   const companyNumberInput = document.getElementById("companyNumber");
//   const validInfo = document.getElementById("valid");

//   checkbox.addEventListener("change", onChange);

//   function onChange(e) {
//     if (e.target.checked == true) {
//       companyInfo.style.display = "block";
//     } else {
//       companyInfo.style.display = "none";
//     }
//   }

//   submitButton.addEventListener("click", onClick);

//   function onClick(e) {
//     e.preventDefault();
//     let isCorrect = false;

//     if (userNamePattern.test(userInput.value) == false) {
//       userInput.style.borderColor = "red";
//       isCorrect = false;
//     } else {
//       userInput.style.border = "";
//       isCorrect = true;
//     }

//     if (emailPattern.test(emailInput.value) == false) {
//       emailInput.style.borderColor = "red";
//       isCorrect = false;
//     } else {
//       emailInput.style.borderColor = "";
//       isCorrect = true;
//     }

//     if (
//       passWordPattern.test(passInput.value) == false ||
//       confirmPassInput.value !== passInput.value
//     ) {
//       passInput.style.borderColor = "red";
//       confirmPassInput.style.borderColor = "red";
//       isCorrect = false;
//     } else {
//       passInput.style.border = "";
//       confirmPassInput.style.borderColor = "";
//       isCorrect = true;
//     }

//     if (checkbox.checked == true) {
//       if (companyNumberInput.value < 1000 || companyNumberInput.value > 9999) {
//         companyNumberInput.style.borderColor = "red";
//         validInfo.style.display = "none";
//       } else {
//         companyNumberInput.style.borderColor = "";
//         if (isCorrect) {
//           validInfo.style.display = "block";
//         } else {
//           validInfo.style.display = "none";
//         }
//       }
//     }
//     if (checkbox.checked == false) {
//       if (isCorrect) {
//         validInfo.style.display = "block";
//       } else {
//         validInfo.style.display = "none";
//       }
//     }
//   }
// }

