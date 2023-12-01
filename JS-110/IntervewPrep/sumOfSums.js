
/*
Input: array of numbers
Output: The sum of of the sums for each sub-sequence.
  ex. [1, 2, 3] ==> 1 + 1 + 2 + 1 + 2 + 3 = 10

Algorithm:
iterate thru the array.
the output is the sum of the element at index0
the output is the sum of the element at index0 + index1
continue this patter until the array is iterated thru. return the output value.
*/

const sumOfSums = (arr) => {
  return arr.reduce((acc, curr, index) => acc + curr *(arr.length - index), 0);
} 

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));
