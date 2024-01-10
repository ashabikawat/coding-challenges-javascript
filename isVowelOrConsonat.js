function isVowelOrConsonant(letter) {
  let char = letter.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return `The given letter is ${letter} and it is a vowel`;
  } else {
    return `The given letter is ${letter} and it is a consonat`;
  }
}

console.log(isVowelOrConsonant("a"));
console.log(isVowelOrConsonant("e"));
console.log(isVowelOrConsonant("r"));
console.log(isVowelOrConsonant("i"));
console.log(isVowelOrConsonant("o"));
console.log(isVowelOrConsonant("u"));
console.log(isVowelOrConsonant("t"));
console.log(isVowelOrConsonant("p"));
console.log(isVowelOrConsonant("q"));
