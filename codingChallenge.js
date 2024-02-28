// console.log(
//   "----------------- How to merge an object inside another object -----------------  "
// );

// const person = {
//   name: "Asha",
//   age: 22,
//   gender: "Female",
// };

// const address = {
//   city: "Kalyan",
//   pin: 421306,
// };

// Object.assign(person, address);
// console.log(person);

// console.log(" ");
// console.log(
//   "----------------- How to clone an object into new empty object-----------------  "
// );

// const user = Object.assign({}, person);

// console.log(user);

// console.log(" ");
// console.log(
//   "----------------- How to clone an array into new empty array-----------------  "
// );

// const arr = [1, 2, 3, 4, 5];
// const newArr = [...arr];
// console.log(newArr);

// console.log(" ");
// console.log(
//   "----------------- How to iterate over an array -----------------  "
// );

// const friends = ["Jenny", "Bill", "John", "Mark", "steve", "Elon"];

// friends.forEach((element) => {
//   console.log(element);
// });

// console.log(" ");
// console.log(
//   "----------------- How to iterate over the properties of an object -----------------  "
// );

// const person = {
//   name: "Asha",
//   age: 22,
//   gender: "Female",
// };

// for (const key in person) {
//   console.log(`${key} ==> ${person[key]}`);
// }

// console.log(" ");
// console.log("----------------- How to use map method -----------------  ");

// const number = [1, 2, 3, 5, 4, 6, 7, 8, 9];

// const squareOfNumber = number.map((element) => {
//   return element * element;
// });

// console.log(squareOfNumber);

// console.log(" ");
// console.log("----------------- How to use filter method -----------------  ");

// const number = [1, 2, 3, 5, 4, 6, 7, 8, 9];

// const evenNumber = number.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(evenNumber);

// console.log(" ");
// console.log("----------------- How to use reduce method -----------------  ");

// const number = [1, 2, 3, 5, 4, 6, 7, 8, 9];

// const sum = number.reduce((curr, acc) => {
//   return curr + acc;
// }, 0);

// console.log(sum);
