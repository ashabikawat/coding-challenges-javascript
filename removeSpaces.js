const str = "Hard works pays back";

function removeSpaces(str) {
  let removedSpaces = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char !== " ") {
      removedSpaces = removedSpaces + char;
    }
  }
  console.log(removedSpaces);
}

removeSpaces(str);
