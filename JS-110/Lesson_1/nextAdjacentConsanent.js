/*
initialize an array output to an empty array
  initialize a variable i to 0 to increment thru the strings
  initialize a count variable to the value of 0
  initialize a consonant variable to a regular expresion of ^ aeiou
  iterate over each string within the input array.
  if the current element of the string is a consanent, increment the count variable. 
  set the current string as an object with its count value as its value.
  reset the count variable when the next string is accessed.
  use the object.entries method to create an array of the key values pairs.
  use the map method on the array to sort the array from greatest to least based on the index 1 of each element.
  if there is a tie, the index with the least value will be first in the new array.
  return the mapped array.
*/

const sortStringsByConsonants = (strings, i = 0, count = 0, output = {}) => {
  if (i === strings.length) { 
    return Object.entries(output).sort((a, b) => output[b] - output[a]).map((el) => el[0]).reverse();
  }
  const word = strings[i].split('');
  const CONSONANT = /[^aeiou]/;
  let max = 0;
  word.forEach((el) => {
    if (CONSONANT.test(el)) {
      count += 1;
      if (max < count) max = count;
    } else count = 0; 
  });
  output[strings[i]] = max;
  return sortStringsByConsonants(strings, i + 1, count = 0, output);
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']



let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let statement = "The Flintstones Rock";

let newObj = [...statement].reduce((acc, curr) => {
  if (curr === " ") return acc;
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

let str = 'This is a string';
let arr = ['This', 'is', 'a', 'string'];
let obj = { 'This is': 'a string' };

//console.log(obj.'This is');
let result = [1, 2, 3, 4, 5].map(num => num + 1);
result; // []
console.log(result);