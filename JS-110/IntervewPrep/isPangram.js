/*
Input: a String
Output: Boolean if the input string is a pangram.
A pangram is a string that contains every alphabetic character atleast once. case is irrevelant.
Algorithm: 
construct a regex to find a character class of case insensitive alphabetic letters.
Ensure each alphabetic letter is only captured once. with a capture group and a negative look ahead.
  (negative so the captured element isnt captured again).
invoke the match method on the input string with the regex as the argument.
return the boolean of comparing the length of the array of matches with the value 26(26 letters in the 
    alphabet).

*/


const isPangram = (string) => {
  const regex = /([a-z])(?!.*\1)/gi;
  const matches = string.match(regex);
  return matches.length === 26;
}

const everyLetter = (string) => {
  return "abcdefghijklmnopqrstuvwxyz".split('').every((el) => string.toLowerCase().indexOf(el) !== -1);
}

console.log(everyLetter("The quick brown fox jumps over the lazy dog."));
console.log(everyLetter("This is not a pangram."));

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("This is not a pangram."));
