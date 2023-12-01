/*
Input: string
Output: an array that contains all substrings of the input string considering each element of the
  input string as the start of the input string.

Algorithm:
create an output array.
split the string into inidvidual elements
iterate thru the string 
the current element is the first element of the input string.
push the current element into the output array.
the current element is now the current element + the element at the next index.
continue this unitl the string is iterated thru.
move to the next element of the input string and repeat the process of pushing substrings
  into the output array,
continue this process unitl the entire string is iterated thru.
*/
const leadingSubstrings = (string) => {
  return [...string].map((_, index, array) => array.slice(0, index + 1).join(''));
};

const substrings = (string) => {
   return [...string].map((el, index, arr) => {
    let currArr = arr.slice(index).join('');
    return leadingSubstrings(currArr);
  }).flat();
}

console.log(substrings('abcde'));

const recursiveLeadingSubstrings = (string, i = 0, j = i, output = []) => {
  if (i === string.length) return output;

  const subStr = string.slice(i, j + 1);
  output.push(subStr);

  if ( j === string.length - 1) {
    return recursiveLeadingSubstrings(string, i + 1, i + 1, output);
  } else {
  return recursiveLeadingSubstrings(string, i , j + 1, output); 
  }
}

console.log(recursiveLeadingSubstrings('abcde'));