const lottery = false;

const lotteryPromise = new Promise((resolve, reject) => {
  if (lottery) {
    resolve("Yay");
  } else {
    reject("Nay");
  }
});

async function lotteryFunc() {
  try {
    const res = await lotteryPromise;
  } catch (err) {
    // let error = new Error("Error");
    console.log(err);
  }
}

lotteryFunc();
