function furniture(input) {
  let totalPrice = 0;

  let command = input.shift();
  console.log("Bought furniture:");

  while (command !== "Purchase") {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qnt>\d+)/;
    let match = command.match(pattern);

    if (match) {
      let name = match.groups.name;
      console.log(name);
      let price = match.groups.price;
      let qnt = match.groups.qnt;
      totalPrice += price * qnt;
    }

    command = input.shift();
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}