/*
Input: String
Output: An object with the letters of the string as the keys, and their frequency as their value
Algorithm:
create an output object
split the string into an array
iterate thru the array
assign the element as a key in the array, if it already exists increment the value by 1
return the object.
*/

const count = (string) => {
  return string.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {})
}

console.log(count('aba'));
console.log(count('ABC'));