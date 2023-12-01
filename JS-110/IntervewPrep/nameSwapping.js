/*
Input: first and last name string
Output: last name comma spce  first name string

convert the string to an array split at a space to make two elements in the array.
reverse the array, join the array at the space with a comma for separation, and return it.


*/

const swapName = (name) => {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));