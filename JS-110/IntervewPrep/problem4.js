/*
Input: array of numbers
Output: returns the two numbers that are closest together in value in an array
sort each array from greatest to least to help with subtraction
declare a min variable initiated to the value of Infinity for comparison.
declare an output variable to store the current values that represnet the smallest difference
subtract each value in the array with the current element
if this difference is less than the current value of the minimum variable re-assign the minimum variable
  to the current element and the value subtracted from it.


*/

const closestNumbers = (nums, i = 0, min = Infinity, output ) => {
  if (i === nums.length) return output;
  nums = nums.sort((a, b) => b - a);

  curr = nums[i] - nums[i + 1];
  min = Math.min(min, curr);
  output = min === curr ? [nums[i], nums[i + 1]] : output;

  return closestNumbers(nums, i + 1, min, output);
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]