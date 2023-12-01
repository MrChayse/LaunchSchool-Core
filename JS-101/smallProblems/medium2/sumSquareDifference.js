/*
Input: num
Output: the difference between the sum of the integers 1 - num added together squared and each 
  integer squared and incremented from 1 - num

add values up to the input num value and square sum.
square a value starting at 1 and the next value squared.
subtract the values and return the result
*/

const sumSquareDifference = (num, i = 1, sumSquare = 0, squareSum = 0) => {
  if (i > num) return (sumSquare ** 2) - squareSum;
  sumSquare += i ;
  squareSum += i**2;
  return sumSquareDifference(num, i + 1, sumSquare, squareSum);
}

console.log(sumSquareDifference(3)); // should now return 22
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
