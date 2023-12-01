/*
fib sequence [1, 1, 2, 3, 5, 8, 13, 21...etc]
Input: number (representing the 1st number in the fib sequence with number amount of digits).
Output: the number in the fibonacci sequence that has the  input number of digits 
Algorithm:
start with an array of [1, 2]
and a count variable of 2 since I am starting with the first two values of the 
  fibonnaci sequence.
get the sum of the array as [arr[1], arr[0] + arr[1]].
push the value of arr at index 1 to the array
divide the number by 10 until it is no longer possible. the amount of times
  it is divided by 10 is the number of digits.
if the number of digits is equal to the input number, return the curr number
Continue the fibonacci sequence until the digit count is equal to the input number.
*/

// const fibIndexByLength = (bigInt) => {
//   let fibNums = [1, 2];
//   let count = 0;
//   while (count < bigInt) {
//     fibNums.push(fibNums[fibNums.length - 2] + fibNums[fibNums.length - 1]);
//     curr = fibNums[fibNums.length - 1];
//     count = String(curr).length;
//   }
//   console.log(fibNums);
//   return fibNums.length + 1;
// }
const fibIndexByLength = (digit, num1 = 1n, num2 = 2n, count = 3) => {
  if (String(num2).length === Number(digit)) return count;

  [num1, num2] = [num2, num1 + num2];
  return fibIndexByLength(digit, num1, num2, count + 1);
}
  
console.log(fibIndexByLength(2n));
console.log(fibIndexByLength(3n));
console.log(fibIndexByLength(10n));
console.log(fibIndexByLength(16n));
console.log(fibIndexByLength(100n));
console.log(fibIndexByLength(1000n));
// console.log(fibIndexByLength(10000n));