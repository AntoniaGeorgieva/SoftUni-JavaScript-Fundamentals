function cutAndReverse(str)
{
  let reversedStr = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }

  let firstWord = reversedStr.substring(0, reversedStr.length /2);
  let secondtWord = reversedStr.substring(reversedStr.length /2, reversedStr.length);

  console.log(secondtWord);
  console.log(firstWord);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')