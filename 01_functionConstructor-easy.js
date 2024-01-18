// Create a constructor function for a person with properties like name, age, and a method to greet.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hi ${this.name}, How are you mate !`);
// };

// const bill = new Person("Bill", 20);
// bill.greet();

// // Implement a constructor function for a basic calculator with methods for addition and subtraction

// function Calculator(a, b) {
//   this.a = a;
//   this.b = b;
// }

// Calculator.prototype.sub = function () {
//   return this.a - this.b;
// };

// Calculator.prototype.add = function () {
//   return this.a + this.b;
// };

// const num = new Calculator(2, 4);
// console.log(num.add());
// console.log(num.sub());

// // Write a function constructor for a simple blog post with properties like title, content, and author.

// function Blog(title, content, author) {
//   this.title = title;
//   this.author = author;
//   this.content = content;
// }

// const medium = new Blog("Harry potter - review", "nice one", "j k rowling");
// console.log(medium);

// // Create a constructor function for a car with properties like make, model, and year.

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const bmw = new Car("BMW", 90, 1909);
// console.log(bmw);

// Implement a function constructor for a student with properties like name, age, and grades.

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

const bill = new Student("Bill", 20, "A");

console.log(bill);
