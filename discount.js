function discount(a, b, c, d) {
  let sum = a + b + c + d;
  if (sum > 100) {
    return `Cost is ${sum}. Since it is above 100 your cost after discount  is ${
      sum - sum * 0.1
    } `;
  } else {
    return `Cost is ${sum}`;
  }
}

console.log(discount(4, 5, 6, 8));
console.log(discount(48, 50, 60, 20));
console.log(discount(20, 30, 40, 50));
