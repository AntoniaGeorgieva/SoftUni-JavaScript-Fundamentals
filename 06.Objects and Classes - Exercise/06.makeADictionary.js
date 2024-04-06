function makeADictionary(json) {
  let arr = [];
  for (let i = 0; i < json.length; i++) {
    let obj = JSON.parse(json[i]);
    arr.push(`Term: ${Object.keys(obj)} => Definition: ${Object.values(obj)}`);
  }
  arr.sort((a, b) => a.localeCompare(b));

  for (obj of arr) {
    console.log(obj);
  }

}