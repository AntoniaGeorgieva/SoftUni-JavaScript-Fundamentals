function input(arr1, arr2) 
{
  let sum = [];
  let num1 = 0;
    for (let i = 0; i < arr1.length - 1; i++) {
      let num = arr1[i];
      for (let p = 0; p < arr2.length - 1; p++) {
       num1 = arr2[p];
       if(num == num1) {
        sum.push(num);
      }
    }
    }
    for(let i = 0; i <= sum.length - 1; i++) {
      console.log(sum[i])
    }
    
}

input(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])