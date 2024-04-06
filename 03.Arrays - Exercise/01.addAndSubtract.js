function addAndSubtract(arr) {
  let newMassiv = [];
  let sum1 = 0;
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum1 += arr[i];
    let num = 0;
    if (arr[i] % 2 == 0) {


      newMassiv.push(arr[i] + i)
      num = arr[i] + i;
    }
    else {
      newMassiv.push(arr[i] - i)
      num = arr[i] - i;
    }
    sum += num;//5+14
  }
  console.log(newMassiv);
  console.log(sum1);
  console.log(sum);
}