/*
Input: arr1, arr2
Output: an array that contains all of the combinations of number pairs that exist between the 
  two arrays. sorted from least to greatest.

Algorithm:
create an output array
multiply all values in arr2 by the 1st element of arr1, and push the product to the output array.
multiply all values in arr2 by the 2nd element in arr1, and push the product to the output array,
sort the output array from least to greatest
return output array.

Code:
invoke the reduce method on arr2, the acc is initialized to an empty array
the curr value is initialized to the value of an array with the product of the curr and arr1
  index 0, and the product of the curr and arr1 index 1.
push the value of the curr to the acc.
return the acc flattened. and sorted from least to greatest.

***** the map method is more appropriate since no value is accumulated other than an array
  which the map method produces. ****
*/

const multiplyAllPairs = (nums1, nums2) => {
  return nums2.map((el) => {
    el = [el * nums1[0], el * nums1[1]];
    return el.flat();
  }).sort((a, b) => a[0] - b[0]).flat();
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // ==> [ 2, 4,  4,  6,8, 8, 12, 16]