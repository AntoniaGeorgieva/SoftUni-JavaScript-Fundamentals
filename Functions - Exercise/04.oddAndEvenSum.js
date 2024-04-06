function oddAndEvenSum(num)
{
    let arr = num.toString().split('');
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < arr.length; i++) {
      let number = arr[i];
      if(number % 2 == 0) {
        evenSum += Number(arr[i]);
      }
      else {
        oddSum += Number(arr[i]);
      }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)