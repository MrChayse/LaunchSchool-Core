/*
Input: a sentence string
Output: every occurrence of a number word converted to its corresponding digit
  character value. ** ex. 'nine' -> 9, 'two' -> 2. 
Algorithm:
create an object of string number keys with the number as the value.
split the input string into an array.
to get the desired array structure, use the regex /([\s.]+)/ as the split
  argument.
iterate thru the input string.
if the current value is in the object of number values, assign it the value of
  its match in the number values object.
return the string
*/

const wordToDigit = (text) => {
  const regex = /([\s.]+)/;
  const numbers = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};

  return text.split(regex).map((el) => el = el in numbers ? numbers[el] : el).join('');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));