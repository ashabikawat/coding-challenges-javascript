// Arrays, strings and loops

// let arr = ["mango", "grapes", "banana", "watermelon"];

// How do you create an empty array in JavaScript?

// const arr2 = arr;
// // arr = [];
// arr.splice(0, 4);
// console.log(arr);

// How do you access the first and last elements of an array?

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// How do you add an element to the end of an array?

// arr.push("papaya");
// console.log(arr);

// How do you remove the last element from an array?

// arr.pop();
// console.log(arr);

// How do you loop through an array in JavaScript?

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((fruit) => console.log(fruit));

// arr.map((fruit) => console.log(fruit));

// for (const fruit of arr) {
//   console.log(fruit);
// }

// for (const fruit in arr) {
//   console.log(arr[fruit]);
// }

// How do you check if an element exists in an array?

// console.log(arr.includes("mango"));

// console.log(arr.indexOf("mango"));

// How do you remove an element from an array at a specific index?

// const removedElement = arr.splice(1, 1);
// console.log(arr);

// How do you concatenate two arrays in JavaScript?

// const newArray = ["apple", "pineapple"];

// const fruits = arr.concat(newArray);
// console.log(fruits);

// Write a function to flatten a nested array in JavaScript.

// const nums = [1, 2, [3, 4], 5, 6];
// console.log(nums.flat());

// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// function is_array(data) {
//   if (Array.isArray(data)) {
//     return `given data is an array`;
//   } else {
//     return `given data is not an array`;
//   }
// }

// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 4, 0]));

// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// function array_Clone(arr) {
//   return arr.slice(0);
// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// const str = "  Hey you are doing good,  keep it up   ";

// console.log(str.length);

// const newString = str.trim();
// console.log(
//   `The new string is ${newString} and its length is ${newString.length}`
// );

// console.log(str.length - newString.length);

// console.log(str.indexOf("good"));

// console.log(str.slice(22));
// console.log(str.substring(22));

// let fruits = ["banana", "orange", "apple", "mango", "water melon"];

// const firstElement = fruits[0];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement, lastElement);

// fruits.unshift("pineapple");
// console.log(fruits);

// fruits.splice(4, 1);
// console.log(fruits);

// fruits.push("pineapple");
// console.log(fruits);

// fruits.splice(4, 0, "dragon fruit");
// console.log(fruits);

// fruits.splice(2, 1, "kiwi");
// console.log(fruits);

// console.log(fruits.slice(1, 4));

// console.log(fruits.slice(fruits.length - 3));

// const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// console.log(arrayNumbers.length);

// const firstElement = arrayNumbers[0];
// const lastElement = arrayNumbers[arrayNumbers.length - 1];
// console.log(firstElement, lastElement);

// console.log(arrayNumbers[arrayNumbers.length - 3]);

// let evenNumbers = [];
// for (const even of arrayNumbers) {
//   if (even % 2 === 0) {
//     evenNumbers.push(even);
//   }
// }
// console.log(evenNumbers);

// let oddNumbers = [];
// for (const odd of arrayNumbers) {
//   if (odd % 2 === 1) {
//     oddNumbers.push(odd);
//   }
// }
// console.log(oddNumbers);

// let evenSum = 0;
// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (i % 2 === 0) {
//     evenSum = evenSum + arrayNumbers[i];
//   }
// }
// console.log(evenSum);

// let oddSum = 0;
// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (i % 2 === 1) {
//     oddSum = oddSum + arrayNumbers[i];
//   }
// }
// console.log(oddSum);

// let sum = 0;
// for (let i = 0; i < arrayNumbers.length; i++) {
//   sum = sum + arrayNumbers[i];
// }
// console.log(sum);

// for (const fiveMultiple of arrayNumbers) {
//   if (fiveMultiple % 5 === 0) {
//     console.log(fiveMultiple);
//   }
// }

// console.log(arrayNumbers.includes(115));
// console.log(arrayNumbers.includes(23));

// arrayNumbers.splice(3, 0, 55, 66);
// console.log(arrayNumbers);

// arrayNumbers.splice(4, 3);
// console.log(arrayNumbers);

// const set = new Set(["apple", "mango", "banana", "water melon", "apple"]);
// console.log(set);

// set.add("dragon fruit");
// console.log(set);

// console.log(set.has("apple"));

// set.delete("mango");
// console.log(set);

// console.log(set.entries());

// console.log(set.keys());

// console.log(set.values());

// set.forEach((fruit) => console.log(fruit));

// set.clear();
// console.log(set);

// const str = "hey how are you";

// console.log(str);

// console.log(str.trim());

// console.log(str.length);

// console.log(str.indexOf("o"));

// console.log(str.concat("keep it up"));

// console.log(str.match("a"));

// for (let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

// class

// class Person {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hi ${this.name}`);
//   }
// }

// let asha = new Person("asha", 23);
// asha.greet();
// console.log(asha);

// const user = class {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };
// let asha = new user("asha", 23);
// console.log(asha);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hi ${this.name}`);
// };

// const asha = new Person("asha", 23);
// asha.greet();
// console.log(asha);

// shallow copying :

// const person = {
//   name: "asha",
//   age: 23,
// };
// console.log(person);

// const asha = person;
// console.log(asha);

// asha.age = 42;
// console.log(asha);
// console.log(person);

// deep copying

// const person = {
//   name: "asha",
//   age: 23,
// };
// console.log(person);

// // const asha = Object.assign({}, person);
// // console.log(asha);

// const asha = JSON.parse(JSON.stringify(person));
// console.log(asha);

// asha.age = 25;
// console.log(asha);
// console.log(person);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class User extends Person {
//   constructor(name, age, degree) {
//     super(name, age);
//     this.degree = degree;
//   }
// }

// const asha = new User("asha", 23, "BSCIT");
// console.log(asha);
