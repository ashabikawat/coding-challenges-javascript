// Creating a promise :

const lottery = false;

const lotteryPromise = new Promise((resolve, reject) => {
  if (lottery) {
    resolve("Yay! i won the lottery");
  } else {
    reject("Nay! i lost the lottery");
  }

  function lotteryText() {
    console.log("lottery");
  }
});

// Consuming a promise

lotteryPromise
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("LOTTERING");
  });
