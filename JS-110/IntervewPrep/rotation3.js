/*
Input: number
Output: The number rotated the maximum number of times.
Algorithm:
initialize a variable i to the value of 0
convert the input number to a string data type
move the value at index i to the back of the number
increment the value of i 
if the value of i is equal to the number strings length, return the
  number string converted to a number.
Code:
recursively call the rotateRighmostDigits function until the index value
  is equal to the length of the input number.
*/
const rotateRightmostDigits = (num, count) => {
    const strNum = num.toString().split('');
    const rotateNum = strNum.splice(strNum.length - count);
    return Number([...strNum, ...[rotateNum.slice(1), rotateNum[0]].flat()].join(''));
  }
   

const maxRotation = (num, i = 0) => {
  let numStr = num.toString().split('');
  if (i === numStr.length - 1) return Number(numStr.join(''));

  numStr = rotateRightmostDigits(Number(numStr.join('')), numStr.length - i);
  return maxRotation(numStr, i + 1);
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));