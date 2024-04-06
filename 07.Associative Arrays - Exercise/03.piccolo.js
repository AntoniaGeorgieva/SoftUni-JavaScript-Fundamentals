function piccolo(arr) {
  let carsObj = {};
  for (let commands of arr) {
    let [direction, carNumber] = commands.split(", ");

    if (direction == "IN") {
      carsObj[carNumber] = carNumber;
    } else if (direction == "OUT") {
      if (carNumber in carsObj) {
        delete carsObj[carNumber];
      }
    }
  }

  let carsArr = Object.values(carsObj).sort();
  if (carsArr.length < 1) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(carsArr.join('\n'));
  }
}