/*
multiply all values of the arr together, divide by length property of array
return as a string with 3 decimal places.
*/
const multiplicativeAverage = (arr) => {
  return arr.reduce((acc, curr) => acc * curr, 1 / arr.length).toFixed(3);
}
let nums = [2, 5, 7, 11, 13, 17];
console.log(multiplicativeAverage(nums));
