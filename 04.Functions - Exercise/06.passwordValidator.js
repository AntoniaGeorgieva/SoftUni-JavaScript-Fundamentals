function passwordValidator(pass) {
  let isValidLength = checkValidPassLength(pass);
  let isOnlyLettersAndDigits = checkOnlyLettersAndDigts(pass);
  let isMin2Digits = checkMin2Digits(pass);

  if (isValidLength && isOnlyLettersAndDigits && isMin2Digits) {
    console.log("Password is valid");
  }

  function checkValidPassLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    }
    else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }

  function checkOnlyLettersAndDigts(pass) {
    for (let i = 0; i < pass.length; i++) {
      let code = pass[i].charCodeAt(0);
      if (!((code >= 48 && code <= 57) || (code >= 65 & code <= 90) || (code >= 97 && code <= 122))) {
        console.log("Password must consist only of letters and digits");
        return false;
      }
    }
    return true;
  }

  function checkMin2Digits(pass) {
    let digitCounter = 0;
    for (let i = 0; i < pass.length; i++) {
      let code = pass[i].charCodeAt(0);
      if (code >= 48 && code <= 57) {
        digitCounter++;
      }
    }
    if (digitCounter < 2) {
      console.log("Password must have at least 2 digits");
      return false
    } else {
      return true;
    }
  }
}