function race(arr)
{
  let names = arr.shift().split(", ");
  let command = arr.shift();
  let personInfo = {};

  while(command !== "end of race") {
    let pattern1 = /(?<name>[A-Za-z])/g;
    let pattern2 = /\d/g;
    let match1 = command.match(pattern1);
    let match2 = command.match(pattern2);
    let name = match1.join("");
    for (const num of match2) {
      if (names.includes(name)) {
        personInfo[name] += Number(num);
        }
    }

    command = arr.shift();
  }
  console.log(personInfo);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])