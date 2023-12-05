/*
Input: array of numbers
Output: an array of numbers that indicate how may numbers are smaller than 
  the number at the correlating index.

  If the given number occurs multiple times, it should only be counted once.

Algorithm:
create a count variable initialized to 0
create an output array.
set the value at index 0 as the current element.
loop thru the entire array.
if the value within the loop is less than the current value, increment the count
  variable.
Once iteration is complete push the value of count to the output array.
return the output array

*/

// const smallerNumbersThanCurrentRecursive = (nums, i = 0, output = []) => {
//   if (i === nums.length) return output;
//   const curr = nums[i];
//   const count = nums.filter((el, index, array) => {
//     return array.indexOf(el) === index && el < curr;
//   }).length;
//   output.push(count);
//   return smallerNumbersThanCurrent(nums, i + 1, output);
// }

const smallerNumbersThanCurrent = (nums) => {
  const compareArr = nums.filter((el, index) => nums.indexOf(el) === index);

  return nums.reduce((acc, curr) => {
    curr = compareArr.filter(el => el < curr).length;
    acc.push(curr);
    return acc;
  }, [])
};


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([1, 4, 6, 8, 13, 2, 4, 5, 4]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([1]));
