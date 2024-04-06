function sortAnArrayBy2Criteria(arr) {
  let finalArr = arr.sort((a, b) =>
    //length
    a.length - b.length ||
    //alphabetical value
    a.localeCompare(b));
  console.log(finalArr.join('\n'));
}