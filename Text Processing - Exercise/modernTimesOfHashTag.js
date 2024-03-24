function modernTimesOfHashTag(string)
{
  let words = string.split(' ');

  for (let word of words) {
    if(word.includes('#') && word.length > 1) {
      let newWord = word.substring(1, word.length);

      for (let symbol of newWord) {
        if(!(symbol.charCodeAt(0) >= 65 && symbol.charCodeAt(0) <= 90 || symbol.charCodeAt(0) >= 97 && symbol.charCodeAt(0) <= 122)) {
          newWord = "";
          break;
        }
      }

      if(newWord.length > 0) {
      console.log(newWord);
      }
    }
  }
}

modernTimesOfHashTag('The symbol # is known #v1riously in English-speaking #regions as the #number sign'
)