/*

*/

const multiplyPairs = (arr1, arr2, i = 0, output = []) => {
  if (i === arr1.length) return output.sort((a, b) => a - b);
  if (arr2.includes(arr1[i])) {
    let multiplyVals = arr2.map((el) => el * arr1[i]);
    output = output.concat(multiplyVals);
  }
  return multiplyPairs(arr1, arr2, i + 1, output);
}

console.log(multiplyPairs([2, 4], [4, 3, 1, 2]));
