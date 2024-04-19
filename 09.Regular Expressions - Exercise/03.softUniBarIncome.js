function softUniBarIncome(input)
{
  let command = input.shift();
  let totalPrice = 0;

  while (command !== "end of shift") {
    let pattern = /%(?<name>[A-Z][a-z]+)%\w*<(?<product>[A-Za-z]+)>\w*\|(?<cnt>[0-9]+)\|\D*(?<price>[0-9]+[.]*\d)[$]/;
    let match = command.match(pattern);
    let name = match.groups.name;
    let product = match.groups.product;
    let cnt = Number(match.groups.cnt);
    let price = Number(match.groups.price);
    let currTotalPrice = cnt * price;
    totalPrice += Number(currTotalPrice);
    console.log(`${name}: ${product} - ${currTotalPrice.toFixed(2)}`);

    command = input.shift();
  }
  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

console.log("----");

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)