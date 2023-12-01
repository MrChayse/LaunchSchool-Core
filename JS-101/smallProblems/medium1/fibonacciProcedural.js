/*
fib(n - 1) + fib(n - 2) not recursively
*/

const fib = (num) => {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= num; counter +=1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }
  return previousTwo[1];
}

console.log(fib(20));