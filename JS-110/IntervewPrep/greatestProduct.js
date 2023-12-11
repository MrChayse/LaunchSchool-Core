/*
Input: string of digits.
Output: the greatest product of five consecutive digits.
Algorithm:
get 5 digits out of the string of digits.
assign a max variable to -Infinity.
if i cant get 5 digits, return the value of the max variable
multiply them together, and assign them to the max variable.
move the 5 digits over by 1 and perform expression again.
if the value is greater than value of max, assign max this new value.

Code:
assign i to 0
assign j to i + 5
assign max to -Infinity.
if j === undefined return the value of max.
while i is less than j multiply the values to together as numbers not strings.
assign max by using the Math.max function.
*/

const greatestProduct = (nums, i = 0, j = i + 5, max = -Infinity) => {
  if (i === nums.length - 4) return max;

  max = Math.max(max, [...nums].slice(i, j).reduce((acc, curr) => acc *= Number(curr), 1));
  return greatestProduct(nums, i + 1, j + 1, max);
}

console.log(greatestProduct("123834539327238239583"));
console.log(greatestProduct("92494737828244222221111111532909999"));
console.log(greatestProduct("92494737828244222221111111532909999"));
console.log(greatestProduct("92494737828244222221111111532909999"));
console.log(greatestProduct("02494037820244202221011110532909999"));
