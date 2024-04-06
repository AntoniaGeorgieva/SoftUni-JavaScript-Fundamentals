function input(arr1)
{
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let leftNum = Number(arr1[i]);
    let isTop = true;
    for(let j = i + 1; j < arr1.length; j++) {
      let rightNum = Number(arr1[j]);
      if (rightNum >= leftNum) {
        isTop = false;
        break;
    }
    }
    if(isTop) {
      arr.push(leftNum);
    }
  }
  console.log(arr.join(" "));
}
input([1, 4, 3, 2])
input([14, 24, 3, 19, 15, 17])
input([27, 19, 42, 2, 13, 45, 48])