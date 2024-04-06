function loadingBar(num) {
  if (num == 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    let percent = "";
    let points = "";
    for (let i = 0; i < num / 10; i++) {
      percent += "%";
    }
    for (let i = 0; i < 10 - (num / 10); i++) {
      points += ".";
    }

    console.log(`${num}% [${percent}${points}]`);
    console.log("Still loading...");
  }
}