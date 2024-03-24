function palindromeIntegers(arrOfInt)
{
    for (let i = 0; i < arrOfInt.length; i++) {
      let num = arrOfInt[i].toString().split('');
      let reversedArray = num.reverse().toString();
      if(arrOfInt[i].toString().split('') == reversedArray) {
        console.log("true");
      }
      else {
        console.log("false");
      }
    }
}

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])