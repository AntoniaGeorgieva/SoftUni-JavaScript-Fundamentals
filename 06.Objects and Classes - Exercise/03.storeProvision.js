function storeProvision(stock, products) {
  for (let i = 0; i < products.length; i += 2) {
    if (!(stock.includes(products[i]))) {
      stock.push(products[i]);
      stock.push(products[i + 1]);
    } else {
      let idx = stock.indexOf(products[i]);
      stock[idx + 1] = Number(stock[idx + 1]) + Number(products[i + 1]);
    }
  }

  for (let i = 0; i < stock.length; i++) {
    let productName = "";
    let productQuantity = 0;
    if (i % 2 !== 0) {
      productName = stock[i - 1];
      productQuantity = stock[i]
      console.log(`${productName} -> ${productQuantity}`);
    }
  }
}