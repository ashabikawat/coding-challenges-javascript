// let dolphinsAvg = (96 + 108 + 89) / 3;
// let koalasAvg = (88 + 91 + 110) / 3;

// let dolphinsAvg = (97 + 112 + 101) / 3;
// let koalasAvg = (109 + 95 + 123) / 3;

let dolphinsAvg = (97 + 112 + 101) / 3;
let koalasAvg = (109 + 95 + 106) / 3;

console.log(dolphinsAvg);
console.log(koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log(`Dolphis team won`);
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log(`Koalas team won`);
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log(`Match draw`);
} else {
  console.log(`No team wins`);
}
