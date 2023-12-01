/*
get the digit value by getting the remainder of num / 10.
get the value of the num without the previous digit by
subtracting the digit value from the num then dividing by 10.
repeat the process.
create an outupt variable to an empty string
concat each digit to the output string
return the number function invoked on the output string
*/
const reverseNumber = (num, output = "") => {
  if (num === 0) return Number(output);

  const digit = num % 10;
  output += digit;

  return reverseNumber(Math.floor(num / 10), output);
}

// const reverseNumber = num => {
//   return Number(String(num).split('').reverse().join(''));
// }

console.log(reverseNumber(12213));
console.log(reverseNumber(12000));