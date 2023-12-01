/*
Input: number representing the nth number of the fibonacci sequence
Output: The nth number of the fibonacci sequence
Algorithm:
use a count variable to count which fib number the curr is initialize to 3.
  because i will start the sequence with 1, 2 (2 is the 3rd number of fibonacci).
while the count variable is less than the input num value, perform the 
  fiibonacci expression. assign each expression to an output variable
When the while loop expires, return the output variables value.
*/

const fibonacci = (num) => {
  let [fib1, fib2] = [1, 2];

  for (let i = 3; i < num; i++) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }
  return fib2;
};

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));