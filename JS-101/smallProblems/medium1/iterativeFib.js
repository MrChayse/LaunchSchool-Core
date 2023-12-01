const fib = (num) => {
  let num1 = 1;
  let num2 = 2;
  for (let i = 3; i < num; i += 1) {
    [num1, num2] = [num2, num1 + num2];
  }
  return num2
}

console.log(fib(7));
