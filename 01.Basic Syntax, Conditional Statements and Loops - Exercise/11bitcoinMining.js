function bitcoinMining(input) {
  let lv = 0;
  let gold = 0;
  let bitcoin = 0;
  let firstDay = 0;
  for (let i = 1; i <= input.length; i++) {
    gold = input[i - 1];
    if (i % 3 == 0) {
      gold -= gold * 0.3;
    }
    lv += gold * 67.51;
    if (lv >= 11949.16) {
      bitcoin = Math.floor(lv / 11949.16)//17
    }
    if (bitcoin >= 1 && firstDay == 0) {
      firstDay = i;
    }
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (firstDay >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  let money = lv - 11949.16 * bitcoin;
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}