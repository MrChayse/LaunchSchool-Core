/*
Input: String;
Output: an object with lowercase, uppercase, and neither keys. The keys values
  are a percentage of the characters within the input string.
To calculate the percentage, the amount of the characters are divided by the
  length of the string and multiplied by 100. This value is rounded down and
  changed to a string type fixed to 2 decimal places. 
Get the string length.
return an object literal 
each key is assigned the value of a regular expression match method on the 
  input string. the length of the match method is divided by the length of
  the input string. this value is multiplied by 100, rounded down and fixed to 
  2 decimal places.
regex for the lowercase /[a-z]/g
regex for the uppercase /[A-Z]/g
regex for the neither /[^a-z]/gi  
** After running the code, i discovered I do not need the Math.floor method.
*/

const letterPercentages = (string) => {
  return {
  Lowercase: ((string.match(/[a-z]/g) || []).length / string.length * 100).toFixed(2),
  Uppercase: ((string.match(/[A-Z]/g) || []).length / string.length * 100).toFixed(2),
  Neither: ((string.match(/[^a-z]/gi) || []).length / string.length * 100).toFixed(2)
  };
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
