/*
Input: number
Output: the sum of all of the numbers that are multiples of 3 or 5 BELOW the input number. 
Algorithm:
initialize an empty array.
initialize a value to 0
while the value is less than the input number, increment the value by 1
if the value divided by 3 or 5 equals 0 push this value into the empty array.
once iteration is complete, add all of the values in the array together.
return this sum
Code:
i can use the reduce method on the array to get the sum.
I can use the .keys() function on a new array object with the input num as the argument. this will
  give me an array of nums up to the value 1 less than the input num because arrays are 0 indexed.
the filter method can determine the values divisible by 3 or 5.
the reduce method can add the values.
*/

const solution = (num) => {
  return num < 1 ? 0 : [...new Array(num).keys()].filter((num) => num % 3 === 0 || num % 5 === 0).reduce((acc, curr) => acc += curr, 0);
}

console.log(solution(10));// 23
// console.log(solution());
// console.log(solution());
// console.log(solution());
// console.log(solution());
// console.log(solution());