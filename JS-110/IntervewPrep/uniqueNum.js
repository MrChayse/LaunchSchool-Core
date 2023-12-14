/*
Input: array of numbers
Output: the unique number
Algorithm: 
sort the array of numbers from least to greatest
if the fist element is equal to the second element, find the element with the index isn't 1.
if the first element isn't equal to the second element, return the first element.

Code:
if arr[0] is equal to arr[1] filter the arr with the indexOf method to return the element that 
  doesnt have an index of value of the first element.
else check if the first element is equal to the third element
if the first element is equal to the third element, return the second element, 
*/

const findUniq = (nums) => {
  return nums[0] === nums[1] ? nums.filter((el) => nums.indexOf(el) !== 0)[0]
  : nums[0] === nums[2] ? nums[1] : nums[0]; 
}

console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));

