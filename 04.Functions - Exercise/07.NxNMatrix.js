function NxNMatrix(n) {
  for (let rows = 1; rows <= n; rows++) {
    let row = "";
    for (let cols = 1; cols <= n; cols++) {
      row += n + ' ';
    }
    console.log(row);
  }
}