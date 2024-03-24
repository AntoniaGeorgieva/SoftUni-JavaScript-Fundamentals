function houseParty(arr)
{
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(" ");
   
    if(!(tokens.includes('not'))) {
      if(!(list.includes(tokens[0]))) {
        list.push(tokens[0]);
      } else {
        console.log(`${tokens[0]} is already in the list!`);
      }
    }
    else {
      if(list.includes(tokens[0])) {
        list.splice(list.indexOf(tokens[0]), 1, "");
      } else {
        console.log(`${tokens[0]} is not in the list!`);
      }
    }
  }
  console.log(list.join('\n'));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])

console.log("----");

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)