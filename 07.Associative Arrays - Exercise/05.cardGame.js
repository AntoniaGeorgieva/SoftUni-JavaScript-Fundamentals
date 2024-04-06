function cardGame(arr) {
  let personObj = {};
  let peopleAndCards = {};

  for (const peopleInfo of arr) {
    let command = peopleInfo.split(": ");
    let personName = command[0];
    if (personObj[personName] == undefined) {
      personObj[personName] = 0
      peopleAndCards[personName] = [];
    }
    let cards = command[1].split(", ");
    let cardPower = {
      'J': 11,
      'Q': 12,
      'K': 13,
      'A': 14,
    }
    let typePower = {
      'S': 4,
      'H': 3,
      'D': 2,
      'C': 1
    }

    for (let card of cards) {
      if (peopleAndCards[personName].includes(card)) {
        continue;
      }
      peopleAndCards[personName].push(card)
      let value = 0
      let t = card[card.length - 1];
      let p = card.split(t)[0];
      if (t == "S") {
        if (p == "J") {
          value += 4 * 11;
        } else if (p == "Q") {
          value += 4 * 12;
        } else if (p == "K") {
          value += 4 * 13;
        } else if (p == "A") {
          value += 4 * 14;
        } else {
          value += 4 * Number(p);
        }
      } else if (t == "H") {
        if (p == "J") {
          value += 3 * 11;
        } else if (p == "Q") {
          value += 3 * 12;
        } else if (p == "K") {
          value += 3 * 13;
        } else if (p == "A") {
          value += 3 * 14;
        } else {
          value += 3 * Number(p);
        }
      } else if (t == "D") {
        if (p == "J") {
          value += 2 * 11;
        } else if (p == "Q") {
          value += 2 * 12;
        } else if (p == "K") {
          value += 2 * 13;
        } else if (p == "A") {
          value += 2 * 14;
        } else {
          value += 2 * Number(p);
        }
      } else if (t == "C") {
        if (p == "J") {
          value += 11;
        } else if (p == "Q") {
          value += 12;
        } else if (p == "K") {
          value += 13;
        } else if (p == "A") {
          value += 14;
        } else {
          value += Number(p);
        }
      }
      personObj[personName] += Number(value);
    }
  }
  for (const key in personObj) {
    console.log(`${key}: ${[personObj[key]]}`);
  }
}