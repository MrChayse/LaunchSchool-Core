/*
Input: number value as a string data type.
Output: The number of odd numbered sub-strings that can be formed.

Algorithm:
initialize a count variable to 0
split the string into an array of numbers
the current number is the first number of the array
if the current number is odd, increment the count value
add the next number to the current number. 
if it is odd increment the count value.
once the iteration is complete, move the current number to the next value of the array
  and continue the process.
Once all numbers have been the current number, return the count varialbe
*/

const oddSubStrings = (nums) => {
  return [...nums].reduce((acc, curr, index) => acc + (+curr % 2 ? index + 1 : 0), 0);
}

console.log(oddSubStrings("1341")); // => 7
console.log(oddSubStrings("1357"));
console.log(oddSubStrings("13471"));
console.log(oddSubStrings("134721"));
console.log(oddSubStrings("1347231"));
console.log(oddSubStrings("13472315"));