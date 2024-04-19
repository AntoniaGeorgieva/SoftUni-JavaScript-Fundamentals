function race(arr) {
  let names = arr.shift().split(", ");
  let command = arr.shift();
  let personInfo = {};

  while (command !== "end of race") {
    let pattern1 = /(?<name>[A-Za-z])/g;
    let pattern2 = /\d/g;
    let match1 = command.match(pattern1);
    let match2 = command.match(pattern2);
    let name = match1.join("");
    let distance;
    if (names.includes(name)) {
      if (!(personInfo.hasOwnProperty(name))) {
        distance = 0;
      } else {
        distance = Number(personInfo[name]);
      }
      for (const num of match2) {
        distance += Number(num);
      }

      personInfo[name] = distance;
    }

    command = arr.shift();
  }
  let sortedRacers = Object.entries(personInfo).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sortedRacers[0][0]}\n2nd place: ${sortedRacers[1][0]}\n3rd place: ${sortedRacers[2][0]}`);
}