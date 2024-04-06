function train(arr) {
  let maxCapacity = arr[1];
  let wagons = arr[0].split(' ');
  for (let i = 2; i < arr.length; i++) {

    if (arr[i].length > 3) {
      let tokens = arr[i].split(' ');
      let passengers = tokens[1];
      wagons.push(passengers);
    }
    else {
      for (let j = 0; j < wagons.length; j++) {
        if (Number(wagons[j]) + Number(arr[i]) <= maxCapacity) {
          wagons[j] = Number(wagons[j]) + Number(arr[i]);
          break;
        }

      }
    }

  }
  console.log(wagons.join(" "));
}