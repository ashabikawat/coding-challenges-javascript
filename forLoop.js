// ------------------- sum of numbers -------------------

// function sumOfNumbers(num) {
//   let sum = 0;

//   for (let i = 0; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumOfNumbers(10));

// ------------------- multiplication of numbers -------------------

// function multiplicationOfNumbers(num) {
//   let multiplication = 1;

//   for (let i = 1; i <= num; i++) {
//     multiplication = multiplication * i;
//   }
//   return multiplication;
// }

// console.log(multiplicationOfNumbers(10));

// ------------------- print numbers -------------------

// function printNumbers(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }

// printNumbers(10);

// ------------------- print reverse numbers -------------------

// function reverseNumbers(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// }

// reverseNumbers(10);

// ------------------- multiples of numbers -------------------

// function multiplesOfNumber(num) {
//   for (let i = 1; i < 11; i++) {
//     let result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
//   }
// }

// multiplesOfNumber(5);

// ------------------- even numbers -------------------

// function evenNumbers(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// evenNumbers(10);

// ------------------- odd numbers -------------------

// function oddNumbers(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// }

// oddNumbers(10);

// ------------------- Factorial of number -------------------

// function factorialOfNumber(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// console.log(factorialOfNumber(5));

// ------------------- fibonacci series of numbers -------------------

// function fibonacciSeries(num) {
//   let a = 0;
//   let b = 1;
//   let sum = 0;

//   for (let i = 0; i <= num; i++) {
//     sum = a + b;
//     a = b;
//     b = sum;
//   }
//   return b;
// }

// console.log(fibonacciSeries(5));

// a=0  // 0 // 1 // 1 // 2
// b=1 // 1 // 1 // 2 // 3
// sum = a+b  // 1   // 2  // 3 // 5
// a=b       // 1 // 1 // 2 // 3
// b=sum    // 1 // 2 // 3 // 5

// ------------------- prime numbers -------------------

// function primeNumber(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       console.log("Not prime number");
//     }
//   }
// }

// primeNumber(4);

// ------------------- Reverse string -------------------

// const str = "Asha";

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str.charAt(i));
// }
