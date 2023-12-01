/*
Input: string
Output: A NEW string with each character in the input string doubled.

Create a new empty string as the output string.
iterate thru the input string.
concat the output string with the value of the current value of the input string + itself
Once the iteration is complete, return the output string
*/

const repeater = (string) => {
  return [...string].reduce((acc, curr) => acc += curr.repeat(2), '');
}


console.log(repeater("Hello"));
console.log(repeater("Good job!"));
console.log(repeater(''));