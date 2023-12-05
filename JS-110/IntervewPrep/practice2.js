/*
Input: array of numbers
Output: The minimum sum of 5 consecutive numbers in the input array
if the array has less than 5 elements, return null
Algorithm:
if the array length is less than 5 return null.
declare a min variable initialized to the value of Infinity.
start iterating thru the array
create a window of 5 elements.
add all of the elements in the window together.
once the iteration reaches the end of the window, compare it with the min value
  to get the new smallest value in the array.
if it's possible to slide the window over 1, do so and continue operation.
once iteration is complete, return the min variables value.
*/

const minimumSum = (nums, i = 0, j = 5, min = Infinity) => {
  if (nums.length < 5) return null;
  else if (i + j > nums.length) return min;
    let sum = nums.reduce((acc,_, index) => {
      if (index >= i && index < i + j) acc += nums[index];
      return acc;
    }, 0);
  min = Math.min(min, sum);
  return minimumSum(nums, i + 1, j, min);
}

console.log(minimumSum([1, 2, 3, 4]));
console.log(minimumSum([1, 2, 3, 4, 5, -5]));
console.log(minimumSum([1, 2, 3, 4, 5, 6]));
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]));
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]));