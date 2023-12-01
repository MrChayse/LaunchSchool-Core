
/*
Input: array of numbers
Output: array of numbers sorted from a - z alphabetically.

Algorithm:
create an object of the numbers 1-19 as keys and their string values the values.
iterate thru the input array and create a new array with the new value for each index the
  string value for the corresponding number.
sort this new array from a - z.
iterate thru this array and reassign the current element with the key that holds its value.
*/

const alphabeticNumberSort = (nums) => {
  const numbers = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
  };

  return nums.map((el) => numbers[el]).sort().map((el) => Object.keys(numbers).find((key) => numbers[key] === el));
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
