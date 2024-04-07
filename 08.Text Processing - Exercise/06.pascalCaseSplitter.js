function pascalCaseSplitter(str) {
  // for (let letter of str) {
  //   if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
  //     let strArr = str.split(letter);
  //   }
  // }
  
  // console.log(str + ", ");
  let words = str.match(/[A-Z][a-z]+/g);
    
    // Join the words with comma and space
    let result = words.join(", ");
    
    console.log(result);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan")