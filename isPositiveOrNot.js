function isPositiveOrNot(number) {
  if (number > 0) {
    return `Given number is ${number} - it is positive`;
  } else if (number < 0) {
    return `Given number is ${number} - it is negative`;
  } else {
    return `Given number is ${number} - it is equal to 0`;
  }
}

console.log(isPositiveOrNot(1));
console.log(isPositiveOrNot(-2));
console.log(isPositiveOrNot(0));
