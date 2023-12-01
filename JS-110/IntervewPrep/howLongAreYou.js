/*
Input: string
Output: array that consists of all of the words from the string with each word
  followed by a space and the words length.
If the input string is empty or no argument is passed, the function should return
  an empty array.

Algorithm:
iterate thru the input array.
declare a variable to the value of the current elements length property.
concat the curr element with a space and the value of the length.
Once iteration is complete, return the output array.

Code: 
use the split method to split the string into an array of words.
invoke the reduce method on the array of words.
assign the acc the value of an empty array
declare a length variable and initialize it to the length property of the curr
  element.
concat the curr element with a space and the length variable.
push the curr to the acc.
return the acc
*/

const wordLengths = (string) => {
  if (!string) return [];
  return string.split(' ').reduce((acc, curr) => {
    curr = curr + ' ' + curr.length;
    acc.push(curr);
    return acc;
  }, []);
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());