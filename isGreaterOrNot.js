function isGreaterOrNot(a, b) {
  if (a > b) {
    return `The given numbers are ${a},${b} and ${a} is greater than b`;
  } else if (a < b) {
    return `The given numbers are ${a},${b} and ${a} is less than b`;
  } else {
    return `The given numbers are ${a},${b} and ${a} is equal to b`;
  }
}

console.log(isGreaterOrNot(1, 2));
console.log(isGreaterOrNot(42, 32));
console.log(isGreaterOrNot(52, 32));
console.log(isGreaterOrNot(2, 32));
console.log(isGreaterOrNot(2, 2));
console.log(isGreaterOrNot(4, 2));
console.log(isGreaterOrNot(0, 2));
