// const message = "The Flintstones Rock!";
// for (let pad = 0; pad < 10; pad += 1) {
//   console.log(`${" ".repeat(pad)} ${message}`);
// }

// 

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
      divisor -=1;
    }
  }
  return factors;
}
 console.log(factors(20));