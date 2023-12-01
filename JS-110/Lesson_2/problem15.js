/*
input: array of objects
output: an array where the objects key values are even
Use the filter method to only return an array of objects with even numbers 
Since the arrays elements are individual objects, i can use the Object.values
  method to get an array of values. 
.every works well with the filter method because it yields a truthy result.
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const output = arr.filter((obj) => {
  return Object.values(obj).every((arr) => {
    return arr.every((num) => num % 2 ===0);
  })
});

console.log(output);
