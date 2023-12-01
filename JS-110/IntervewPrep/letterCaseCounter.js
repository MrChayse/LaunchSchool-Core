/*
Input: string
Output: an object containing three properties, number of lowercase characters, number of uppercase
  characters, number of characters that are neither.

Algorithm: 
create a regex variable to the value of a capture group of a-z
create an object literal with the three properties lowercase, uppercase neither all initialized to 0
split the input string into individual elements
test the element against the regex 

Code:

*/

const letterCaseCount = (string) => {
  return {
    UpperCase: (string.match(/[A-Z]/g) || []).length,
    LowerCase: (string.match(/[a-z]/g) || []).length,
    Neither: (string.match(/[^a-z]/gi) || []).length
  };
}  

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));