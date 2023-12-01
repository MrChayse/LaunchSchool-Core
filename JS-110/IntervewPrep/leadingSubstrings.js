
/*
Input: string
Output: An array of substrings that make up the string argument.
  'abc' ==> ['a', 'ab', 'abc'];

Algorithm:
initialize an output array as an empty array.
The current is the value of index 0 of the input string
push the current into the output array
reassign current to the current + the value at index 1 of the input string
push the current into the outpu array
re-assign the current to the current + the value at index 2 of the input string
push the current into the array....
once the input string is iterated thru, return the output array
*/

const leadingSubstrings = (string, i = 0, output = []) => {
  if (i === string.length) return output;

  output.push((output.length === 0 ? '' : output[output.length - 1]) + string[i]);
  
  return leadingSubstrings(string, i + 1, output);
};

const aLeadingSubstrings = (string) => {
  return [...string].map((_, index, array) => array.slice(0, index + 1).join(''));
};

console.log(aLeadingSubstrings("abc"));
console.log(aLeadingSubstrings("a"));
console.log(aLeadingSubstrings("xyzzy"));

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));
