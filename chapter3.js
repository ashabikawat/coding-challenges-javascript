// //  Creating a promise

// const lottery = false;

// const lotteryPromise = new Promise((resolve, reject) => {
//   if (lottery) {
//     resolve("Yay! you won the lottery");
//   } else {
//     reject("Nay! you lost the lottery");
//   }
// });

// // consuming a promise

// lotteryPromise
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   })
//   .finally(() => {
//     console.log("I m always");
//   });

// async await

// async function lotteryFunc() {
//   try {
//     let result = await lotteryPromise;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// lotteryFunc();

// call method

// const person = {
//   name: "Bill gates",
//   company: "Microsoft",
// };

// function greetings(greet, role) {
//   console.log(`Hi,${role} ${this.name} ${greet} `);
// }

// greetings.call(person, "good morning", "CEO");

// greetings.apply(person, ["good morning", "CEO"]);

// const newFunc = greetings.bind(person);
// newFunc("good morning", "CEO");
