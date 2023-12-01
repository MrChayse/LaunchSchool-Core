/*
input: array with nested arrays.
output: new array with same structure, only contains numbers that 
  are multiples of 3. 
use map method to access each sub array and create a new array for each subarray
return the filter method with the callback determining if the value divided by 3
is 0 or not. if 0 it is true and it will return to the new array.
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let output = arr.map((subArray) => {
  return subArray.filter((el) => el % 3 === 0)
});

console.log(output);
