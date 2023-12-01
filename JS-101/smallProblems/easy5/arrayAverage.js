/*
add all values in the array together divide by array.length property
Math.floor the result
*/
const average = (arr) => {
  return Math.floor(arr.reduce((acc, curr) => acc += curr) / arr.length);
}
console.log(average([9, 47, 23, 95, 16, 52]));