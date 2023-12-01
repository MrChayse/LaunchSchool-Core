/*
Input: String
Output: input string with staggered capital letters/ lowercase letters
Algorithm:
iterate thru the input string
if the index is odd, the letter is lowercase, if not the letter is uppercase.
return the string
Code:
initialize an i variable to 0
convert the input string to an array of letters using the split method
if the value of i is equal to the length property of the strArr, return it
the value of strArr[i] is lowercase if the index is odd even if it's even
recursively call the function, the strArr joined to a string is the input string
  and i is incremented to 0.
*/

// const staggeredCase = (string, i = 0) => {
//   const strArr = [...string];
//   if (i === strArr.length) return strArr.join('');

//   strArr[i] = i % 2 !== 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase();
//   return staggeredCase(strArr.join(''), i + 1);
// }

// const staggeredCase = (string) => {
//   return [...string].reduce((acc, curr, index) => {
//     curr = index % 2 !== 0 ? curr.toLowerCase() : curr.toUpperCase();
//     return acc + curr;
//   }, "");
// }

const staggeredCase = (string) => {
  return string.replace(/[a-z]/gi, (match, index) => {
    return match = index % 2 !== 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));