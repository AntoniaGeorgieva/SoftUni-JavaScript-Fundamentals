function stringSubstring(word, text) {
  let wordsOfText = text.split(" ");

  for (let currWord of wordsOfText) {
    let toLowerWord = currWord.toLowerCase();
    if (toLowerWord == word) {
      console.log(word);
      return;
    }
  }

  console.log(`${word} not found!`);
}