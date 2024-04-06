function employees(obj) {
  for (let i of obj) {
    let name = i;
    let length = i.length;
    console.log(`Name: ${name} -- Personal Number: ${length}`);
  }
}