/*
Input: array of glove colors.
Output: how many matches of colors - a Number.
Algorithm - iterate thru the array of glove colors.
add the color to an object as a key, the value is 1. If the color already exists, increment by 1
Once iteration is complete, return the object.
access theh objects values. 
Add them all together to get the total pairs of gloves.
return this number

*/

const pairs = (gloves) => {
  const glovePairs = gloves.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  return Object.values(glovePairs).reduce((acc, curr) => acc + Math.floor(curr / 2), 0);
}

console.log(pairs(["red", "green", "red", "blue", "blue"]));
console.log(pairs(["red", "red", "red", "red", "red", "red"]));
