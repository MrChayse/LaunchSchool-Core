/*
input: array of objects.
output: array with identical structure each number incremented by 1
use map method to return a new array
Do not modify the original data structure
use map to access each object in the array and create a new output array
initialize a new object for each instance of the map iteration
access the key for each object in the array.
  use the for in loop method
assign the output objects value the value of the key in the for in loop + 1




*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let outputArr = arr.map((obj) => {
  let output = {};
  for (let key in obj) {
    output[key] = obj[key] + 1;
  }
  return output;
});

let newArr = arr.reduce((acc, curr) => {
  let output = {};
  for (let key in curr) {
    output[key] = curr[key] + 1;
  }
  acc.push(output);
  return acc;
}, [])

console.log(outputArr);
console.log(arr);
console.log(newArr);

