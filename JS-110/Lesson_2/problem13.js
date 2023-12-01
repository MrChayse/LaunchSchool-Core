/*
input: array
output: sorted array , sub arrays are ordred based on the sum of ODD numbers.
use sort method with a and b parameters.
invoke the reduce method on the a and b parameters to create a new array
for each subarray. only add the numbers if they are odd numbers.
sort the array from smallest to largest.
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let output = arr.sort((a, b) => {
  let sumA = a.reduce((acc, curr) => curr % 2 === 1 ? acc += curr : acc, 0);
  let sumB = b.reduce((acc, curr) => curr % 2 === 1 ? acc += curr: acc, 0);
  return sumA - sumB;
})

console.log(output);

