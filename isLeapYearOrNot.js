function isLeapYearOrNot(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `The given year is ${year} and it is a leap year`;
  } else {
    return `The given year is ${year} and it is not a leap year`;
  }
}

console.log(isLeapYearOrNot(2020));
console.log(isLeapYearOrNot(2024));
console.log(isLeapYearOrNot(2025));
console.log(isLeapYearOrNot(1900));
