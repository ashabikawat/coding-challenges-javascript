const bills = [125, 555, 44];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totalArray = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totalArray);
