const str = "Hard works pays back";

function vowelsCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count = count + 1;
    }
  }
  console.log(count);
}
vowelsCount(str);
