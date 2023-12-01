/*
Input: string 
Output: boolean if all alphabetic characters are uppercase
Algorithm:
iterate thru every element in the array.
if the element value is a letter check if it is uppercase if not return false.
once the iteration is complete return true because the iteration completed.

*/

const isUppercase = (string) => {
  return /^[A-Z\s\d]*$/.test(string);
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE'));
console.log(isUppercase(''));
