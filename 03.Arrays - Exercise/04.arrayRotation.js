function arrayRotation(arr, rot) {
  let index = 0;

  for (let j = 0; j < rot; j++) {
    arr.push(arr[index]);
    index++;
  }
  arr.splice(arr[-1], rot);
  console.log(arr.join(" "));
}