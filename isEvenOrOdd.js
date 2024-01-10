function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `The given number is ${number} and it is even`;
  } else {
    return `The given number is ${number} and it is odd`;
  }
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(1));
console.log(isEvenOrOdd(15));
