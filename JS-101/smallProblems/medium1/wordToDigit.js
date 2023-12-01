/*
Input: sentence string
Output: sentence string with all number strings as numbers

Data Structures: An Object with a sting number as key and number as the keys value

Algorithm:
convert the string to an array of words to access each word
check if each element in the array of words exists in the string number object
if it does, re-assing the curr element to its value in the string number object.
return the string 

Code:
use the split method on the string to convert it to a string of words. the separator will 
  need to be a regular expression to eliminate any puncuation.
iterate thru the array of words and check if each element exists in the string num object.
if this is true re-assign the value of the curr element to its value in the object.
if not it's value remains the same.
return the string joined together 
*/
const nums = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7,
'eight': 8, 'nine': 9 };

const wordToDigit = (string) => {
  const regex = /([\s.]+)/;
  return string.split(regex).map(el => el in nums ? nums[el] : el).join('');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));