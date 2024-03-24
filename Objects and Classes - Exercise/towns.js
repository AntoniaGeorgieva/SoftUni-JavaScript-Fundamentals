function towns(arr)
{
  for(let i = 0; i < arr.length; i++) {
    let curArr = arr[i].toString().split(" | ");
    let town = curArr[0];
    let latitude = Number(curArr[1]).toFixed(2);
    let longitude = Number(curArr[2]).toFixed(2);
    let obj = {town: town, latitude: latitude, longitude: longitude}
    console.log(obj);
  }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])