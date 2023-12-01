/*
Input: array of integers
Output: smallest sum of 5 consecutive numbers in the array.
  if the array contains less than 5 elements, return null.
if the array length is less than 5 return null.
initialize a sum variable to 0.
initialize a min variable to the value of Infinity.
iterate thru the first five elements in the array and add each elements value to the sum variable.
If this sum variable is less than the value of the min variable, re-assign the min variable the value
  of the sum variable.
keep iterating thru the array and adding the elements as long as there are 5 elements to add.
recursive approach:
initialize i to the value of 0
initialize the sum variable to the value of invoking the reduce method on the input arr.
  acc is the sum of itself with the curr value.
if sum value is less than the value of min, re-assign min the value of sum.
return the recursive call slicing the array at the first index.

*/

const minimumSum = (nums, i = 0, min = Infinity) => {
  if (i + 5 > nums.length && min === Infinity) return null;
  else if (i + 5 > nums.length) return min;
  
  const sum = nums.slice(i, i + 5).reduce((acc, curr) => {
    return acc + curr;
  });

  min = Math.min(min, sum);
  return minimumSum(nums, i + 1, min);
};


console.log(minimumSum([1, 2, 3, 4])); // null
console.log(minimumSum([1, 2, 3, 4, 5, -5])); // 9
console.log(minimumSum([1, 2, 3, 4, 5, 6])); // 15
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100])); //16
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4])); // -10