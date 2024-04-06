function partyTime(list) {
  let guestType = "";
  let guestsArr = [];
  for (let guest = 0; guest < list.length; guest++) {
    if (list[guest] !== "PARTY") {
      let guestCode = list[guest];
      let asciiNum = guestCode[0].charCodeAt(0);
      if (asciiNum >= 48 && asciiNum <= 57) {
        guestType = "VIP";
      } else {
        guestType = "regular";
      }
      guestsArr.push([guestType, list[guest]]);
    } else {
      break;
    }
  }

  let idx = list.indexOf("PARTY");

  for (let i = idx + 1; i < list.length; i++) {
    for (let j = 0; j < guestsArr.length; j++) {
      let guestNum = guestsArr[j];
      if (guestNum[1] == list[i]) {
        let idxOfGuest = guestsArr.indexOf(guestsArr[j]);
        guestsArr.splice(idxOfGuest, 1);
        break;
      }
    }
  }
  guestsArr.sort((a, b) => b[0].localeCompare(a[0]))
  console.log(guestsArr.length);
  for (let iterator of guestsArr) {
    console.log(iterator[1]);
  }
}