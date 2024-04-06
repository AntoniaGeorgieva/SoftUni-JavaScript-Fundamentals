function sorting(arr)
{
  let sortedArr = arr.sort((a, b) => a - b)
  let finalArr = [];

  while(sortedArr.length > 0) {
    let maxNum = sortedArr.pop();
    let minNum = sortedArr.shift();

    finalArr.push(maxNum);
    finalArr.push(minNum);
  }

  console.log(finalArr.join(" "));
}

sorting([3])//94 1 69 2 63 3 52 18 31 21

console.log("---");

sorting([34, 2, 32, 45, 690, 6, 32,
  7, 19, 47])