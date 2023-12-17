/*
Input: array of numbers, the target sum
Output: an array representing the first two values in the array that add up to the targetSum
 parameter.
  If there are more than two pairs, the pair whose second element has the smallest index is the
    solution.
Algorithm: 
initialize a min variable to the value infinity.
iterate thru the input array place each value into an object as a key and it's index index as it's
  value.
get the difference of the targetSum parameter and the current value.
if the difference exists in the object, and it's index is less than the current value of min,
re-assign the value of the output variable to the value of the difference and the current element.
Code:
initialize a min variable to Infinity.
Invoke the reduce method on the input array. The acc is an empty array.
initialize a numberIndex variable to an empty object
initialize a diff variable to the value of the targetSum input minus the curr paramters.
if the value of diff exists in the numberIndex variable  and the index is less than the value of min, assign 
acc the value of the diff value and the curr element.
return the acc.
*/

const sumPairs = (nums, targetSum) => {
  const seen = {};
  for (let i = 0; i < nums.length; i += 1) {
    let diff = targetSum - nums[i];
    if(diff in seen) return [diff, nums[i]];
    seen[nums[i]] = true;
  }
}


console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([20, -13, 40], -7)); 
console.log(sumPairs([5, 9, 13, -3], 10));