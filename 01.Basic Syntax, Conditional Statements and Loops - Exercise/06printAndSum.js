function printAndSum(start, end) {
  let sum = 0;
  let a = "";
  for (let num = start; num <= end; num++) {
    a += num + " ";
    sum += num;
  }
  console.log(a);
  console.log(`Sum: ${sum}`);
}