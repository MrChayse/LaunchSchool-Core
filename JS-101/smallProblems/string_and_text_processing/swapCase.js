/*

*/

const swapCase = (string) => {
  return [...string].reduce((acc, curr) => {
    return acc += curr === curr.toUpperCase() ? curr.toLowerCase() : curr.toUpperCase();
  }, "")
}

console.log(swapCase('Tonight on XYZ-TV'));
console.log(swapCase('CamelCase'));