function isPassOrFail(marks) {
  if (marks >= 60 && marks <= 100) {
    return `Your marks are ${marks}, it is above 60. So, you are pass`;
  } else if (marks < 0 || marks > 100) {
    return `provide a valid number`;
  } else {
    return `Your marks are ${marks}, it is below 60. So, you are fail`;
  }
}

console.log(isPassOrFail(10));
console.log(isPassOrFail(40));
console.log(isPassOrFail(60));
console.log(isPassOrFail(80));
console.log(isPassOrFail(1000));
console.log(isPassOrFail(8000));
