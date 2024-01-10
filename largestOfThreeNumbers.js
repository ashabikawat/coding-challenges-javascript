function largestOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return `${a} is the greatest of all the three numbers i.e ${a}, ${b},${c}`;
  } else if (b > c) {
    return `${b} is the greatest of all the three numbers i.e ${a}, ${b},${c}`;
  } else if (c > b) {
    return `${c} is the greatest of all the three numbers i.e ${a}, ${b},${c}`;
  } else {
    return `all are same`;
  }
}

console.log(largestOfThreeNumbers(1, 2, 3));
console.log(largestOfThreeNumbers(-1, 2, 4));
console.log(largestOfThreeNumbers(-1, 2, 9));
console.log(largestOfThreeNumbers(-1, -2, -9));
console.log(largestOfThreeNumbers(11, 2000, 9));
console.log(largestOfThreeNumbers(1, 1, 1));
console.log(largestOfThreeNumbers(2, 2, 2));
