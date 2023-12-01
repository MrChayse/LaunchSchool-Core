/*
Input: measurements of the 3 sides of a triangle.
Output: the string 'equilateral', 'isosceles', 'scalene' or 'invalid'
equilateral - all three sides are equal
isosceles - 2 sides have equal length
scalene - all three sides are different lengths
valid triangle- sum of the length of the 2 shortest sides must be greater than the length of
  of the longest side. every side has to be greater than 0.
create an array of all 3 sides values.
use the sort method to get them sorted from least to greatest.
if the sum of the first 2 elements is not greater than the last element or if
  the array includes a 0 return invalid.
if all array values added together / 3 = the first element, return equilateral
if the a is not equal to b, a is not equal to c, b not equal to c return scalene
else return isosceles.

*/

const triangle = (side1, side2, side3) => {
  const sides = [side1, side2, side3].sort((a, b) => a - b);
  if (sides[0] + sides[1] < sides[2] || sides.includes(0)) return 'Invalid';

  if ((sides[0] + sides[1] + sides[2]) / 3 === sides[0]) return 'Equilateral';
  if (sides[0] !== sides[1] && sides[0] !== sides[2] && sides[1] !== sides[2]) {
    return 'Scalene';
  } 
  return 'Isosceles';
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
