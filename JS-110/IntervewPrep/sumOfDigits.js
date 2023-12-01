/*
Input: a number
Output: the sum of the digits within the number
  ex. 23 ==> 5
Algorithm:
convert the number to a string to iterate thru it.
change the string to an array to use methods to add the digits.
add the digits.
return the sum as a number data type.
*/

const sum = (num) => {
  numStr = String(num);
  return [...numStr].reduce((acc, curr) => acc += Number(curr), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));