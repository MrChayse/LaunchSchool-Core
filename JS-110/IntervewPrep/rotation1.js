/*
Input: Array of numbers
Output: a copy of the input array with the first element rotated to the end
if input is not an array, return undefined.
Algorithm:
create a copy of the input array.
move the first element of the array to the end. 
return the array.
Code:
use the spread operator to create a shallow copy of the input array.
assign the first element to the end of the array.
return the array
*/

const rotateArray = (nums) => {
  if (!Array.isArray(nums)) return undefined;
  if (nums.length === 0) return [];
  return [...nums.slice(1), nums[0]];
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));
console.log(rotateArray());
console.log(rotateArray(1));