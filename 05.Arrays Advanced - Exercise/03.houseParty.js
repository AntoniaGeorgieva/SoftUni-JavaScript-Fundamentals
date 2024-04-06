function houseParty(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(" ");

    if (!(tokens.includes('not'))) {
      if (!(list.includes(tokens[0]))) {
        list.push(tokens[0]);
      } else {
        console.log(`${tokens[0]} is already in the list!`);
      }
    }
    else {
      if (list.includes(tokens[0])) {
        list.splice(list.indexOf(tokens[0]), 1, "");
      } else {
        console.log(`${tokens[0]} is not in the list!`);
      }
    }
  }
  console.log(list.join('\n'));
}