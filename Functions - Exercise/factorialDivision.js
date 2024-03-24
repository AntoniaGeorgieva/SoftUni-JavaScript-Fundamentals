function factorialDivision(num1, num2)
{
  let factorial = 1;
  let factorial1 = 1;
  for(let i = num1; i > 0; i--) {
    factorial *= i;
  }
  for(let i = num2; i > 0; i--) {
    factorial1 *= i;
  }

  let sum = factorial / factorial1;

  console.log(sum.toFixed(2));
}
factorialDivision(5, 2)