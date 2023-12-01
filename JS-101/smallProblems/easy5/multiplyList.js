/*
two arr arguments. multipley arr1[i] * arr2[i] to create a new arr[i] value for output arr
*/

const multiplyList = (arr1, arr2, i = arr1.length - 1, output = []) => {
  if (i < 0) return output;
  output.unshift(arr1[i] * arr2[i]);
  return multiplyList(arr1, arr2, i - 1, output);
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));

// const multiplyList = (arr1, arr2) => {
//   return arr1.reduce((acc, curr, index) => {
//     acc.push(curr * arr2[index]);
//     return acc;
//   }, [])
// }
// console.log(multiplyList([3, 5, 7], [9, 10, 11]));