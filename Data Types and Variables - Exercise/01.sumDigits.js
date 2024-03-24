function solve(num1)
{
  let num = String(num1);
  let sum = 0;
  for(let i = 0; i < num.length; i++)
  {
    //let num = Number(num1);
    sum += Number(num[i]);
  }
  console.log(sum);
}
solve(244)
