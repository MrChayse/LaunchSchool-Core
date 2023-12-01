/*
Input: string
Output: the input string with the first character of every word capitalized
Algorithm:
convert the input string to an array of words
iterate over the array of words
on each word access the first character of the word
capitalize this character and append the rest of the word to it
continue iteration until the input string is iterated over
return the string arr with it's mutated words joined together
Code:
initialize an increment variable to the value of 0
initialize a strArr variabe to the value of invoking the split method on the 
  input string with a space as the delimiter.
base case: if i is equal to the length of strArr return the strArr joined
  at each space.
assign the value of strArr at the current index at the first element to the 
  value of invoking the .toUpperCase() method on it to convert it to uppercase
  add this value to the rest of the current element by invoking the slice
  method on the current index of string starting from the second character 
  of the string. This will give me the entire word at the current index
  with it's first letter capitalized.
return the recursive call, the input string is now the strArr value with 
  the join method invoked on it so it's converted to a string with all of
  the previous words capitalized at the first letter. increment i by 1.

*/

const wordCap = (string, i = 0) => {
  const strArr = string.split(' ');
  if (i === strArr.length) return strArr.join(' ');
  
  strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);

  return wordCap(strArr.join(' '), i + 1);
}

// using reduce
// const wordCap = string => {
//   return string.split(' ').reduce((acc, curr) => 
//      acc + (curr[0].toUpperCase() + curr.slice(1).toLowerCase() + ' '), '').trimEnd();
// }

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));

