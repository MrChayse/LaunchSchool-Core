// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
/*
Input: array of numbers
Output: an array of number, each number represents how many numbers are smaller it within the array.
If a number occurs multiple times in the array, only count it once.
sort the array from greatest to least.
create an empty object to place each element value into afer it's been compared. 
create a count variable initialized to 0
compare the value at each index with all of the other values
each time the value at the index is less than the current value, increment the count variable.
  if the value is already in the object, use the objects value.
Once the iteration for that element is complet, the value of the count variable is the new value for 
  that element.
Add the element and how many numbers it's greater than to the object.
Once all elements are compared, return the new array.
*/

// Examples:

const smallerNumbersThanCurrent = (nums) => {
  const compareArr = nums.filter((el, index) => nums.indexOf(el) === index);

  return nums.reduce((acc, curr) => {
    curr = compareArr.filter(el => el < curr).length;
    acc.push(curr);
    return acc;
  }, [])
};


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]