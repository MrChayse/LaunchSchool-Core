/*
Input: array of numbers
Output: the two numbers that are closest together
Algorithm:
declare a minimum difference varialbe inidialized to the value of infinity.
iterate thru the array and get the difference of each element.
compare the element with the minimum difference variables value.

assign the minimum difference variables value to the smallest differnce
Once iteration is complete, 
*/

const closestNumbers = (nums, i = 0, min = Infinity, output ) => {
  if (i === nums.length) return output;

  curr = nums[i] - nums[i + 1];
  curr = curr < 0 ? curr * -1 : curr;
  min = Math.min(min, curr);
  output = min === curr ? [nums[i], nums[i + 1]] : output;

  return closestNumbers(nums, i + 1, min, output);
}

console.log(closestNumbers([5, 25, 15, 11, 20]));
console.log(closestNumbers([19, 25, 32, 4, 27, 16]));
console.log(closestNumbers([12, 7, 17]));
