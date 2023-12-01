/*
Input: number
Output: input number with the digits reversed
initialize an output variable to an empty string
convert the  input number to a string
concat the output string with the value of the last value of the input number as a string
repeate this process unitl the input number string is iterated over and return the output value.

/// OR \\\

convert input value to a string, then to an array, then reverse the array, join the array and 
  return the string converted to a number.

*/

const reverseNumber = (num, i = 0, output = []) => {
  const strNum = String(num);
  if (i === strNum.length) return Number(output.join(''));

  output.unshift(strNum[i]);
  return reverseNumber(strNum, i + 1, output);
}


console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));

const reversedNumber = (num) => {
  let strNum = String(num);
  return Number([...strNum].reverse().join(''));
}

console.log(reversedNumber(12345));
console.log(reversedNumber(12213));
console.log(reversedNumber(456));
console.log(reversedNumber(12000));
console.log(reversedNumber(1));

