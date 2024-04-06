function searchForANumber(arr1, arr2) {
  let takeNum = arr2[0];
  let deleteNum = arr2[1];
  let searchNum = arr2[2];
  let occurs = 0;

  let finalArr = arr1.splice(0, takeNum,);
  for (let i = 1; i <= deleteNum; i++) {
    finalArr.shift();
  }

  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i] == searchNum) {
      occurs++;
    }
  }

  console.log(`Number ${searchNum} occurs ${occurs} times.`);
}