/*

*/

const fib = (num, memo = {}) => {
  if (num === 0 || num === 1) return num;

  if (num in memo) return memo[num];
  else {
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  }
  return memo[num];
}

console.log(fib(12));
