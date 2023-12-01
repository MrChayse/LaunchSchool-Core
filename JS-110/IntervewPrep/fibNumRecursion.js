/*
Input: a number that computes the nth number of the fibonacci sequence
Output: the nth number of the fibonacci sequence 
The first and second numbers of the fib sequence are 1, so if num is 1 return 1
create an object to keep the result in for each fib sequence.
if the num input exists in the object, return it's value
if the num input does not exist in the object assign it to the object, and
  assign its's value as the value of the current function call.
the function call on the number - 1 + the function call on the number -2 is the
  expression to calculate the fibonacci of the number.
Continue calling the function until the base case is met.
Algorithm: 

*/

const fibonacci = (num, memo = {}) => {
  if (num <= 2) return 1;
  if (num in memo) return memo[num];

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}


console.log(fibonacci(1))
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));