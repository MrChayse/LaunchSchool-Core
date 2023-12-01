/*
Input: String of Integers
Output: The number of odd number sub-strings that can be formed from the input.

split the str input of numbers into an array of individual numbers.
iterate thru the array of numbers
if the number converted to a number type is odd ( num % 2 !== 0) increment the count by the value of 
  the index + 1.
once the iteration is complete, return the total.
  the input string is "1341":

The first digit '1' is odd, so it contributes 1 to the sum.total = 0 + (0 + 1) = 1
The second digit '3' is odd, so it contributes 2 to the sum. total = 1 + (1 + 1) = 3
The third digit '4' is even, so it contributes 0 to the sum. total = same
The fourth digit '1' is odd, so it contributes 4 to the sum total = 3 + (3 + 1) = 7
*/

const solve = (str) => {
  return str.split('').reduce((acc, curr, i) => {
    const digit = parseInt(curr, 10);
    return acc + (digit % 2 !== 0 ? i + 1 : 0);
  }, 0);
};


console.log(solve("1341"));
console.log(solve("1357"));
console.log(solve("13471"));
console.log(solve("134721"));
console.log(solve("13472315"));
