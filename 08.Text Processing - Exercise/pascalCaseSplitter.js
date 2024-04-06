function pascalCaseSplitter(str)
{
  for (let letter of str) {
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      str.split('');
    }
  }
  console.log(str);
}