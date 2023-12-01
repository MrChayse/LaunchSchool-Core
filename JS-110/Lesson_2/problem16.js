/*
input: nested array
output: an object. the first element of each sub-array is the objects key.
Questions, how many elements is each subArray?
Will I have to iterate thru any objects or just arrays?
Test Case: confirms each sub-array is just 2 elements deep and i will not need 
  to iterate thru any objects.
Data Structure: iterate thru an array and create an object from the array 
  elements.
use the reduce method to iterate thru the array, perform selection and transformation
  into an object and return the object

*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
const output = arr.reduce((acc, curr) => {
  acc[curr[0]] = curr[1];
  return acc;
}, {})

console.log(output);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
