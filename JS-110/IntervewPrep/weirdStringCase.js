/*
Input: string
Output: input string with all even indexed characters in each word upper cased, all odd indexed
  characters lowercased.0th index is even, 1st index is odd for each word in the string.
Algorithm:
split the string into an array of words to access each word.
iterate over each word.
if the index divided by 2 is equal to 0, the element is uppercased.
if the index divided by 2 is not equal to 0 the element is lowercased.
return the array with changed elements joined together as a string.
Code:
invoke the split method at every space to create an array of words.
invoke the map method on the array to access each word.
invoke the map method each the word to access each element.
if the el index is even invoke the toUppercase method on the element.
if the el index is odd invoke the toLowerCase method on the element.
return the array with mutated elements with the join method appended at each space to convert the
  array back to a string type.

*/

const toWeirdCase = (string) => {
  const wordArr = string.split(' ');
  return wordArr.map((word) => [...word].map((el, index) => index % 2 ? el.toLowerCase() : el.toUpperCase()).join('')).join(' ');
}

console.log(toWeirdCase('This'));
console.log(toWeirdCase('This is a test'));