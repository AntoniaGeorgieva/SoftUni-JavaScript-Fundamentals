function input(arr1, arr2) 
{
  let sum = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    let num = arr1[i];
    let num1 = arr2[i];

     if(i % 2 == 0) {
      let num3 = Number(num) + Number(num1);
      sum.push(num3);
    }
    else {
      sum.push(num + num1);
    }
  }
  console.log(sum.join(" - "));
}
input(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])