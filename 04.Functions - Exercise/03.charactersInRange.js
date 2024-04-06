function charactersInRange(ch1, ch2)
{
  let a = ch1.charCodeAt();
  let b = ch2.charCodeAt();
  let newArr = [];
  if(a < b){
  for(let i = a + 1; i < b; i++) {
    newArr.push(String.fromCharCode(i));
  }
} else {
  for(let i = b + 1; i < a; i++) {
    newArr.push(String.fromCharCode(i));
  }
}
console.log(newArr.join(" "));
}

charactersInRange('a', 'd')
console.log("---");
charactersInRange('#', ':')
console.log("---");
charactersInRange('C', '#')