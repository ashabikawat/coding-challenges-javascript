// variables, scope and functions

// What are variables? - var, let, const keyword

// var name = "Asha";
// let age = 23;
// const gender = "female";

// console.log(name);
// console.log(age);
// console.log(gender);

// What are different data types available in Javascript? - numbers, strings, boolean, symbols, undefined, null, objects, arrays, functions

// let age = 23;
// console.log(typeof age);

// let name = "asha";
// console.log(typeof name);

// let isMarried = false;
// console.log(typeof isMarried);

// let a;
// console.log(typeof a);

// let b = null;
// console.log(typeof b);

// let arr = [1, 2, 3, 4];
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// let person = {
//   name: "asha",
//   age: 23,
// };
// console.log(typeof person);

// let greet = function () {
//   console.log("hii there");
// };

// console.log(typeof greet);

// Difference between var, let and const keyword in javascript.

// scope

// {
//   var name = "asha";
// }
// {
//   let name = "asha";
// }
// {
//   const name = "asha";
// }

// console.log(name);

// redeclare

// var name = "asha";
// var name = "raj";
// console.log(name);

// let name = "asha";
// let name = "raj";
// console.log(name);

// const name = "asha";
// const name = "raj";
// console.log(name);

// reinitialization

// var age = 20;
// age = 23;
// console.log(age);

// let age = 20;
// age = 23;
// console.log(age);

// const age = 20;
// age = 23;
// console.log(age);

// declaration

// var isMarried;
// console.log(isMarried);
// let isMarried;
// console.log(isMarried);
// const isMarried;
// console.log(isMarried);

// What is a function and types of functions in javascript?

// function declaration :

// function greet() {
//   let name = "asha";
//   console.log(name);
// }
// greet();

// function expression - named function expression
// const greetings = function greet() {
//   let name = "asha";
//   console.log(name);
// };
// greetings();

// function expression - anonymous function expression

// const greetings = function () {
//   let name = "asha";
//   console.log(name);
// };
// greetings();

// Arrow functions (lambda function)

// const greetings = () => {
//   let name = "asha";
//   console.log(name);
// };
// greetings();

// What is the lexical scope in Java script?

// let name = "asha";

// function greet() {
//   let age = 23;
//   console.log(name);

//   return function b() {
//     console.log(age);
//   };
// }

// greet()();

// closures

// function greetings() {
//   return function helloWorld() {
//     console.log("hello world");
//   };
// }

// const f = greetings();
// f();
