// function multiplicationTable(number) {
//   let count = 1;
//   for (let i = number; count <= 10; i = i + number) {
//     count = count + 1;
//     console.log(i);
//   }
// }

// multiplicationTable(2);
function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}

multiplicationTable(2);
multiplicationTable(3);
