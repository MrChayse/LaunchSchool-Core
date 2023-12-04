/*
Input: number
Output: The difference between adding numbers 1 - input number together
  and squaring the sum, and squaring each value from 1 to input number and 
  adding it to the next value. 
Examples: sumSquareDifference(3) --> 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
Algorithm: 
Initialize a value of i to 1.
initialize a squareSum variable to an empty array.
initialize a sumSquares variable to to an empty array.
while the value of i is less than the input number increment i by 1.
push the value of i to the squareSum array
push the value of i ** 2 to the sumSquares array
once the value of i is equal to teh value of i is greater than the input number
  calculate the  difference of the squareSum array (square it's sum) and the sumSquares
  array.(add up the values). The reduce method would be ideal to get the array
  totals.
*/

const sumSquareDifference = (num, i = 1, squareSum = 0, sumSquare = 0) => {
  if (i > num) return (squareSum ** 2) - sumSquare;
  
  return sumSquareDifference(num, i + 1, squareSum += i, sumSquare + i ** 2);
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));