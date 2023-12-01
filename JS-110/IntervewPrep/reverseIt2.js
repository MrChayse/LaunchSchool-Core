/*
Input: string 
Output: a NEW string all words within the string with a length of 5 or more should be reversed

create a new string from the input string
convert the new string to an array of words.
check each word for a length of 5 or greater.
  if true, convert this word to an array and reverse it then join it as a string again.
convert the array back to a string and return it
*/

const reverseWords = (sentence) => {
  const output = sentence.split(' ');
  return output.map((word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  })).join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
