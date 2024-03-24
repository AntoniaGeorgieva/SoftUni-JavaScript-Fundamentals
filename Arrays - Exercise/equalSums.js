function equalSums(arr)
{
  let sum = 0;
  for (let i = 0; i < arr.length; i++){ 
    let rightSum = 0
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += Number(arr[j])
    }
    if(sum == rightSum){
      console.log(i);
      return;
    }else{
      sum = Number(sum) + Number(arr[i]);
    }
  }  
    console.log("no");
}


equalSums([1])
console.log("---");
equalSums([1, 2, 3])
console.log("---");
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])