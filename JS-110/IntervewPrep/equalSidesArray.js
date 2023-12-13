/*
Input: array of numbers
Output: The index where the sum on the left of the index is equal to the sum of the right 
Algorithm:
sort the array from least to greatest
start the index value at index 1
get the left sum 
get the right sum
if the left sum is greater than the right sum, move the index to the left
if the right sum is greater than the left sum, move the index value to the right.
if the sums are equal, return the index value
increment the index value until the sums are equal, or the array is iterated thru.
if the array is iterated thru, return -1
Code:
initialize an iterator variable to the value of 0
sort the input array from least to greatest with the sort method
the left sum will be all values up to but not including the index at i.
the right sum will all values after the index at i.
loop thru the array until left is equal to right or the array is looped thru.
return the value of i or -1
*/

// const findEvenIndex = (arr, i = 0) => {
//   if (i === arr.length) return -1;

//   const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
//   const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

//   return leftSum === rightSum ? i : findEvenIndex(arr, i + 1);
// };

const findEvenArrIndex = (arr) => {
  const sum = (arr) => arr.reduce((acc,curr) => acc + curr, 0);
  return arr.findIndex((_,idx) => sum(arr.slice(0,idx)) === sum(arr.slice(idx+1)))
}

console.log(findEvenArrIndex([1,2,3,4,3,2,1]));
console.log(findEvenArrIndex([1,100,50,-51,1,1]));
console.log(findEvenArrIndex([1,2,3,4,5,6]));
console.log(findEvenArrIndex([20,10,30,10,10,15,35]));
console.log(findEvenArrIndex([20, 10, -80, 10, 10, 15, 35]));