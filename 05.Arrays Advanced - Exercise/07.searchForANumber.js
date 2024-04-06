function searchForANumber(arr1, arr2)
{
  let takeNum = arr2[0];
  let deleteNum = arr2[1];
  let searchNum = arr2[2];
  let occurs = 0;

  let finalArr = arr1.splice(0, takeNum, );
  for(let i = 1; i <= deleteNum; i++) {
    finalArr.shift();
  }

  for(let i = 0; i < finalArr.length; i++) {
    if(finalArr[i] == searchNum) {
      occurs++;
    }
  }

  console.log(`Number ${searchNum} occurs ${occurs} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
[5, 2, 3])

console.log("---");

searchForANumber([7, 1, 5, 8, 2, 7],
[3, 1, 5])