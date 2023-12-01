/*
Input: arr
Output: arr with elements reversed

DO NOT use reverse method.
mutate the array passed into the function. 
Algorithm:
iterate thru input array
the first element is the last element, the second element is the second to last element. ....
return the mutated array.

*/
const reversedArray = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reversedArray(arr, start + 1, end - 1);
  }
  return arr;
}

// const reversedArray = (arr) => {
//   arr = arr.reduce((acc, curr) => [curr, ...acc], []);
//   return arr;
// }

let array = ["a", "b", "c", "d", "e"];
console.log(reversedArray(array));
console.log(reversedArray(["abc"]));
console.log(reversedArray([1, 2, 3, 4, 5, 6]));