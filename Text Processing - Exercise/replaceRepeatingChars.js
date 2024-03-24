function replaceRepeatingChars(str)
{
  let arrOfLetters = [];
  for (let i = 0; i < str.length; i++) {
    if(str[i] !== str[i - 1])
    arrOfLetters.push(str[i])
  }

  console.log(arrOfLetters.join(""));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')