/*
Input: An array of Arrays the 0th index of each array is the item, the 1st index of each array is
  the quantity of the item.
Output: Array that displays the 0th index of the sub-array in the input array the value of the
  1st index of the subarray in the input array.

Algorithm:
iterate thru the input array.
push the value at index 0 of the sub array to the output array x amount of times.
x represents the value of the subarray at index 1.
Once iteration is complete, return the output array.
*/

const buyFruit = (groceries) => {
  return groceries.reduce((acc, [fruit, quantity]) => {
    acc.push(...Array(quantity).fill(fruit));
    return acc;
  }, []);
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));