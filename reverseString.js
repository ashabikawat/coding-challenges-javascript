const str = "Hard works pays back";

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str.charAt(i);
    if (char !== " ") {
      reversedString = reversedString + char;
    }
  }
  console.log(reversedString);
}

reverseString(str);
