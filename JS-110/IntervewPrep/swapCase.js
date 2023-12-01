/*
Input: string
Output: string with cases swapped
Algorithm:
iterate thru the input string
if the value of the element is equal to the capitalized value, change the value
  to a lowercase
if its not equal to the capitalized value, change it to uppercase
once iteration is complete return the input string

Code:
initialize an incrementation variable to 0
invoke the spread operator on the string to convert it to an array of 
  characters
access the input string at the incrementation value.
if the value is equal to the val with the toUpperCase method, assign it to the
  invoke the value of the toLowerCase method on it.
if the value is not equal to the val with the toUpperCase method, assign it to
  the value of the toUpperCase method invoked on it.
once the iteration is complete, return the strArr joined to a string.

*/

// const swapCase = (string, i = 0) => {
//   const strArr = [...string];
//   if (i === strArr.length) return strArr.join('');

//   strArr[i] = strArr[i] === strArr[i].toUpperCase() ? strArr[i].toLowerCase() : strArr[i].toUpperCase();
  
//   return swapCase(strArr.join(''), i + 1);
// }

// const swapCase = (string) => {
//   return [...string].reduce((acc, curr) => acc + (curr === curr.toUpperCase() ? curr.toLowerCase() : curr.toUpperCase()), '');
// }

const swapCase = (string) => {
  return string.replace(/[a-zA-Z]/g, (match) => {
    return match === match.toLowerCase() ? match.toUpperCase() : match.toLowerCase();
  });
}


console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));