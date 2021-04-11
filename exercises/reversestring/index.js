// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//     let emptyStr = ""
//     for (let i=0; i < str.length; i++){
//     }

//   }

function reverse(str) {
  return str.split("").reduce((revStr, currChar) => {
    return (currChar += revStr);
  }, "");
}

module.exports = reverse;
