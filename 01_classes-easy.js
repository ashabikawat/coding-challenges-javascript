// Create a class representing a basic calculator with methods for addition, subtraction, multiplication, and division.

// class Calculator {
//   a;
//   b;
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   subtraction() {
//     return this.a - this.b;
//   }

//   addition() {
//     return this.a + this.b;
//   }

//   multiplication() {
//     return this.a * this.b;
//   }

//   division() {
//     return this.a / this.b;
//   }
// }

// const sub = new Calculator(4, 2);
// console.log(sub.addition());
// console.log(sub.subtraction());
// console.log(sub.multiplication());
// console.log(sub.division());

// Implement a class for a simple bank account with methods for deposit, withdraw, and checking the balance.

// class BankAccount {
//   accNumber;
//   amount;
//   constructor(accNumber, amount) {
//     this.accNumber = accNumber;
//     this.amount = amount;
//   }

//   deposit() {
//     console.log(`You deposited ${this.amount} rupees`);
//   }
//   withdraw() {
//     console.log(`You withdraw ${this.amount} rupees`);
//   }
//   checkBalance() {
//     console.log(`Your total balance is ${this.amount}`);
//   }
// }

// const asha = new BankAccount(6756453434, 45000);
// asha.deposit();
// asha.withdraw();
// asha.checkBalance();

// Create a class to represent a book with properties like title, author, and a method to display book information.

// class Book {
//   title;
//   author;
//   constructor(title, author) {
//     this.author = author;
//     this.title = title;
//   }
//   show() {
//     console.log(`Book title is ${this.title} written by ${this.author}`);
//   }
// }

// const harryPotter = new Book("Harry potter", "J.k.rowling");
// harryPotter.show();

// Implement a class for a basic car with methods for starting, stopping, and honking the horn.

// class Car {
//   name;
//   constructor(name) {
//     this.name = name;
//   }

//   starting() {
//     console.log(`${this.name} is starting`);
//   }

//   stopping() {
//     console.log(`${this.name} is stopping`);
//   }

//   honking() {
//     console.log(`${this.name} is honking the horn`);
//   }
// }

// const bmw = new Car("BMW");
// bmw.starting();
// bmw.stopping();
// bmw.honking();

// Write a class for a rectangle with methods to calculate area and perimeter.

class Rectangle {
  length;
  width;
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    this.areaOfRect = this.length * this.width;
    console.log(`Area of the reactangle is ${this.areaOfRect}`);
  }

  perimeter() {
    this.perimeterOfRect = 2 * (this.length + this.width);
    console.log(`Perimeter of the recttangle is ${this.perimeterOfRect}`);
  }
}

const rect = new Rectangle(2, 4);
rect.area();
rect.perimeter();
