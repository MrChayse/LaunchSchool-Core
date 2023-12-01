/*
access each digit for the input number. unshift the value of the digit to the output arr.
*/
const digitList = (num, output = []) => {
  if (num === 0) return output;
  let digit = num % 10;
  output.unshift(digit);
  return digitList(Math.floor(num / 10), output);
}
console.log(digitList(12345));

// const digitList = (num, i = 0, output = []) => {
//   const newNum = String(num);
//   const realOutput = output.map(el => Number(el));
//   if (i === newNum.length) return realOutput;
//   output.push(newNum[i]);
//   return digitList(newNum, i + 1, output);
// }
// console.log(digitList(12345));

