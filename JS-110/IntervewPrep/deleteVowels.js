
/*
Input: array of strings
Output: array of the same string values but with all vowels removed.
Algorithm:
create an output array.
iterate thru the input array.
split each element in the array into individual characters
if the current element is a vowel it is not pushed into the output array.
if the current element is not a vowel, it is pushed into the output array.
Once iteration is complete, return the output array

Code:
use the map method to create a new array and iterate thru the elements of the input array
split the current element into an array of elements.
invoke the filter method on the element.
if the element is not 'aeiou' return the element to the new array.
invoke the join method on the filter method result to bring the string back together to be place 
  appropriately within the array constructed from the map method.
*/

const removeVowels = (strings) => {
  return strings.map((el) => el.split('').filter((el) => !'aeiouAEIOU'.includes(el)).join(''))
}

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));

recursiveRemoveVowels = (strings, i = 0, output = []) => {
  if ( i === strings.length) return output;
  const regex = /[aeiou]/gi;
  output.push(strings[i].replace(regex, ''));
  return recursiveRemoveVowels(strings, i + 1, output);
}

console.log(recursiveRemoveVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(recursiveRemoveVowels(['green', 'YELLOW', 'black', 'white']));
console.log(recursiveRemoveVowels(['ABC', 'AEIOU', 'XYZ']));

