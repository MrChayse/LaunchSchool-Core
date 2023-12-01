/*
Input: arr of numbers
Output: the number of pairs in the array.

iterate thru the array. 

*/
const duplicates = (nums) => {
  let pairCount = 0;
  let frequency = nums.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});

  Object.values(frequency).forEach(el => pairCount += Math.floor(el / 2));
  return pairCount;
};

console.log(duplicates([1, 2, 5, 6, 5, 2]));
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
console.log(duplicates([1000, 1000]));
console.log(duplicates([54]));