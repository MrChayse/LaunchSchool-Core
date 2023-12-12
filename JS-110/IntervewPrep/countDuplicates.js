/*
Input: a string
Output: the count of case insensitive alphabetic characters and numeric digits that occur more than
  once in the input string.
The input string only ontains alphabets and numeric digits.
Algorithm:
convert the input string to lowercase
create a frequency object on the input string
if the object keys value is greater than 1, increment the count by 1
return the value of count
Code:
use the reduce method to convert the values to lowercase and bulid the frequency object.
use the Object.values method to get an array of the keys values.
use the filter method on the array to get all values greater than 1
return the length of the filter method call
*/

const duplicateCount = (text) => {
  const frequency = [...text].reduce((acc, curr) => (acc[curr.toLowerCase()] = (acc[curr.toLowerCase()] || 0) + 1, acc), {});
  return Object.values(frequency).filter((el) => el > 1).length;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aavvcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));

