/*
input : object
output : a string of all vowels from the array elements.
use the forEach method
establish what a vowel is and save it to a variable
  maybe use regex? is case sensitive?
initiate an empty string to concate all vowels to
access each objects value of an array
iterate thru the array using forEach
if the current element is a vowel, concat the output string with the current element
once the iteration is complete, return the output string of vowels
** i figured out that the Object.values method would give me access to all of the elements
in a nested array. I used the flat method to get them into one array of words.
I found the flatMap method to convert this array of words to an array of
elements using the split method on each word parameter.
This gave me the single array of letters to use the test method on each letter
to establish if its a vowel or not. and concat it with the return string if true
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = "";
let regex = /[aeiou]/i;
const vals = Object.values(obj).flat().flatMap(word => word.split(''));

vals.forEach((el) => {
  vowels = regex.test(el) ? vowels += ' ' + el : vowels;
});
console.log(vowels);

