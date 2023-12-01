/*
use two pointers to access each index
swap the values at each index
once the index values are the same return the array
*/

const reverse = (array, i = 0, j = array.length - 1) => {
  if ( i === j) return array;
  [array[i], array[j]] = [array[j], array[i]];
  return reverse(array, i + 1, j - 1);
}

console.log(reverse([1,2,3,4,5]));
