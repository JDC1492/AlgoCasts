// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let origStr = str;
//   let revString = str.split("").reverse().join("");
//   if (origStr === revString) {
//     return true;
//   } else {
//     false;
//   }
// }

function palindrome(str) {
  let origStr = str.split("");
  let revString = str.split("").reverse();
  for (let letter of origStr) {
    return revString.every((revLet, i) => revLet[i] === letter[i]);
  }
}

module.exports = palindrome;
