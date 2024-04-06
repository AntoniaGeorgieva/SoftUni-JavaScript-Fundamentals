function equalSums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let rightSum = 0
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += Number(arr[j])
    }
    if (sum == rightSum) {
      console.log(i);
      return;
    } else {
      sum = Number(sum) + Number(arr[i]);
    }
  }
  console.log("no");
}