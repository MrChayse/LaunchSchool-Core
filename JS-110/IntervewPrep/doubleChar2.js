/*
Input: string
Output: a NEW string with every consanant doubled.

create a new string for the output.
iterate thru the input string.
if the current value is not 'aeiou' the current elements value is itself doubled.
concat the output string with the value of the current value.
Once iteration is complete, return the output string.
*/

const doubleConsanants = (string) => {
  return [...string].reduce((acc, curr) => {
    curr = 'bcdfghjklmnpqrstvwxyz'.includes(curr.toLowerCase()) ? curr.repeat(2) : curr;
    return acc += curr;
  }, '');
}

console.log(doubleConsanants('String'));
console.log(doubleConsanants('Hello - World!'));
console.log(doubleConsanants('July 4th'));
console.log(doubleConsanants(''));

// const doubleCons = (str, i = 0, output = "") => { 
//   if (i === str.length) return output; 
//   const char = str[i]; /[aeiouAEIOU]/.test(char) ? output += char : output += char + char; return doubleCons(str, i + 1, output); }

// console.log(doubleCons('Hello-World!'));