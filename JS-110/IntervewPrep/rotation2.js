/*
Input: number, count variable that determines how many digits to rotate from
  the end of the number.
Output: The number with its digits rotated
Algorithm:
convert the number to a string to access index values.
the last count value from the end of the number is moved to the end of 
  the number.
the front of the number -number up to the last count value is the same
the number from the count value + 1 will receive the value at the count 
  value index.
convert this new number to a Number data type.
Code:
use the String function to convert the input number to a string
declare a front variable to the value of the string number up to the
  count variables value. use the slice method.
declare a back variable to the value of the string number at the count
  variables value + 1 concatenated by the value at the count variables
  index.
concat the front with the back variables.
Use the Number function to conver the value to a number type.
return the number value.
*/

function rotateRightmostDigits(num, count) {
  const strNum = num.toString().split('');
  const rotateNum = strNum.splice(strNum.length - count);
  return Number([...strNum, ...[rotateNum.slice(1), rotateNum[0]].flat()].join(''));
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));