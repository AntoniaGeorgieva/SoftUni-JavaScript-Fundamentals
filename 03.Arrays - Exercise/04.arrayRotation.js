function input(arr, rot)
{
  let index = 0;

  for(let j = 0; j < rot; j++) {
    arr.push(arr[index]);
    index++;
  }
  arr.splice(arr[-1], rot);
  console.log(arr.join(" "));
}
input ([51, 47, 32, 61, 21], 2)