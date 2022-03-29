function passValidator(password) {
    function isLengthEnough(input) {
      if (input.length >= 6 && input.length <= 10) {
        return true;
      } else {
        return false;
      }
    }
  
    function hasOnlyLettersAndDigits(input) {
      for (let char of input) {
        let charCode = char.charCodeAt();
        if (
          !(charCode >= 48 && charCode <= 57) &&
          !(charCode >= 65 && charCode <= 90) &&
          !(charCode >= 97 && charCode <= 122)
        ) {
          return false;
        }
      }
      return true;
    }
  
    function hasTwoDigits(input) {
      let counter = 0;
      for (let char of input) {
        let charCode = char.charCodeAt();
        if (charCode >= 48 && charCode <= 57) {
          counter++;
        }
      }
      return counter >= 2;
    }
    let isLengthValid = isLengthEnough(password);
    let containsLetterAndDigits = hasOnlyLettersAndDigits(password);
    let containsTwoDigits = hasTwoDigits(password);
  
    if (isLengthValid && containsLetterAndDigits && containsTwoDigits) {
      console.log("Password is valid");
    }
  
    if (!isLengthValid) {
      console.log("Password must be between 6 and 10 characters");
    }
  
    if (!containsLetterAndDigits) {
      console.log("Password must consist only of letters and digits");
    }
  
    if (!containsTwoDigits) {
      console.log("Password must have at least 2 digits");
    }
  }
  
  passValidator("logIn");
  // passValidator("Pa$s$s");