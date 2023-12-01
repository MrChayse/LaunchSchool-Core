/*
input is a string, output is an object
object contains 3 properties:
number of lowercase characters, number of uppercase letters, number of characters that are not letters
iterate thru the string of values. if the value is uppercase assigne it to uppercase increment value
if the value is lowercase assigne it to lowercase increment the value
if value isnt uppercase or lowercase assignt it to neither and increment its value.
*/

const letterCaseCount = (string) => {
  return {
    UpperCase: (string.match(/[A-Z]/g) || []).length,
    LowerCase: (string.match(/[a-z]/g) || []).length,
    Neither: (string.match(/[^a-z]/gi) || []).length
  };
}  

console.log(letterCaseCount('Hello World 123')); // { UpperCase: 1, LowerCase: 8, neither: 3 }
console.log(letterCaseCount('abCdef 123'));
