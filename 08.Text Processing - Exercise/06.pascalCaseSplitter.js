function pascalCaseSplitter(str) {
  let words = str.match(/[A-Z][a-z]+/g);
  let result = words.join(", ");

  console.log(result);
}