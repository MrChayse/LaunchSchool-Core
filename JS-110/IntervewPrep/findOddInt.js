/*
Input: Array of numbers
Output:the value that appears an odd number of times
Algorithm:
create a frequency object for each element in the array.
find the value that occurs an odd amount of times and return it.
Code:
invoke the reduce method on the input array to create a frequency object for each array element
iterate thru the objects to find the key with an odd number value.
return the key with the odd number value.
*/

const findOdd = (nums) => {
  const frequency = nums.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {});
  return Number(Object.entries(frequency).filter(([key, value]) => value % 2 !== 0).map(([key, value]) => key).join(''));
}

// function findOdd(arr) {
//   return arr.find((el) => arr.filter(el => el == item).length % 2);
// }


console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));