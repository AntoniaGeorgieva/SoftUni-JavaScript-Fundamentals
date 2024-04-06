function sorting(arr) {
  let sortedArr = arr.sort((a, b) => a - b)
  let finalArr = [];

  while (sortedArr.length > 0) {
    let maxNum = sortedArr.pop();
    let minNum = sortedArr.shift();

    finalArr.push(maxNum);
    finalArr.push(minNum);
  }

  console.log(finalArr.join(" "));
}