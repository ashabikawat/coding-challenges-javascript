const calcAvg = (x, y, z) => {
  const avg = (x + y + z) / 3;
  return avg;
};

// const dolphinsAvg = calcAvg(44, 23, 71);
const dolphinsAvg = calcAvg(85, 54, 41);
console.log(dolphinsAvg);

// const koalasAvg = calcAvg(65, 54, 49);
const koalasAvg = calcAvg(23, 34, 27);
console.log(koalasAvg);

function checkWinner(avgDolphin, avgKoala) {
  if (avgDolphin > 2 * avgKoala) {
    console.log(`Dolphins win (${avgDolphin} vs ${avgKoala})`);
  } else if (koalasAvg > 2 * avgDolphin) {
    console.log(`Dolphins win (${avgKoala} vs ${avgDolphin})`);
  } else {
    console.log(`No team wins`);
  }
}

checkWinner(dolphinsAvg, koalasAvg);
