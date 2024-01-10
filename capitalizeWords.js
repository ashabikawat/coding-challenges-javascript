const str = "hard works pays back";

function capitalizeWord(str) {
  let words = str.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  console.log(words.join(" "));
}

capitalizeWord(str);
