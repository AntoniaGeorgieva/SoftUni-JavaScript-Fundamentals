function calculator(num1, symbol, num2) {
  if (symbol == '+') {
    console.log((num1 + num2).toFixed(2))
  }
  else if (symbol == '-') {
    console.log((num1 - num2).toFixed(2))
  }
  else if (symbol == '*') {
    console.log((num1 * num2).toFixed(2))
  }
  else if (symbol == '/') {
    console.log((num1 / num2).toFixed(2))
  }
}