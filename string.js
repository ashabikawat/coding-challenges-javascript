// Challenge #1 — Checking whether two strings are anagrams

// const str1 = "earth";
// const str2 = "heart";

// function anagramChecker(str1, str2) {
//   const string1 = str1.split("").sort().join("");
//   const string2 = str2.split("").sort().join("");

//   if (string1 === string2) {
//     console.log("Given strings are anagrams of each other");
//   } else {
//     console.log("Given strings are not anagrams of each other");
//   }
// }

// anagramChecker(str1, str2);
// anagramChecker("hello", "world");
// anagramChecker("abcd", "dcab");

// Challenge #2 — Checking that a string contains a substring

// const str = "food";

// console.log(str.includes("oo"));

// Challenge #3— Checking whether a string is a palindrome

// const str = "hello";

// function isPalindrome(str) {
//   const reversedString = str.split("").reverse().join("");
//   if (str === reversedString) {
//     console.log("Given string is palindrome");
//   } else {
//     console.log("Given string is not a palindrome");
//   }
// }

// isPalindrome(str);
// isPalindrome("poop");

// Challenge #4 — Reversing letters and words

// function reverseingLettersAndWords(str) {
//   const reversedWord = str
//     .split(" ")
//     .map((word) => {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
//   console.log(reversedWord);
// }

// reverseingLettersAndWords("I evol uoy os !hcum");

// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// function isString(data) {
//   if (typeof data === "string") {
//     console.log("Given input data is string");
//   } else {
//     console.log("Given input data is not a string");
//   }
// }

// isString("w3resource");
// isString([1, 2, 4, 0]);

// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// function is_Blank(data) {
//   if (data === "") {
//     return "Given data is blank";
//   } else {
//     return "Given data is not blank";
//   }
// }

// console.log(is_Blank(""));
// console.log(is_Blank("abc"));

// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

// function string_to_array(data) {
//   return data.split(" ");
// }

// console.log(string_to_array("Robin Singh"));
