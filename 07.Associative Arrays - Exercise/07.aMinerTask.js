function aMinerTask(arr) {
  let assocArr = {};
  for (let i = 1; i < arr.length; i += 2) {

    let resource = arr[i - 1];
    let quantity = Number(arr[i]);

    if (!(assocArr.hasOwnProperty(resource))) {
      assocArr[resource] = quantity;
    } else {
      assocArr[resource] += quantity
    }
  }

  for (const key in assocArr) {
    console.log(`${key} -> ${[assocArr[key]]}`);
  }
}