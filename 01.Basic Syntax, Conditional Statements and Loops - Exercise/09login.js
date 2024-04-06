function login(input) {
  let username = input[0].split();
  let splitedUsernam = username[0].split("");
  let pass = "";
  let incorrectPass = 0;
  for (let i = splitedUsernam.length - 1; i >= 0; i--) {
    pass += splitedUsernam[i];
  }

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== pass) {
      incorrectPass++;
      if (incorrectPass > 3) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${username} logged in.`);
      return;
    }
  }
}