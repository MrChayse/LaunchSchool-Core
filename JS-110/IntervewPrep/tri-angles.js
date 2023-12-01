/*
Input: 3 triangle side values.
Output: 'acute', 'right', 'obtuse', 'invalid'
acute - all angles are less than 90
right - one angle is 90
obtuse - one angle is greater than 90
valid - sum of angles is greater than 180, each angle is greater than 0.

Algorithm:
place all 3 sides into an array
check if the triangle is valid:
  if the array includes 0 or if the sum of the array is less than 180 return
    invalid.
create a right variable initialized to the value of 90.
if the array includes the right variable return right.
if max value in the array is greater than 90 return obtuse
else return acute.
*/

const triangle = (side1, side2, side3) => {
  const sides = [side1, side2, side3];
  const right = 90;
 
  if (sides.includes(0) || sides.reduce((acc, curr) => acc + curr) < 180) {
    return 'Invalid';
  }
  return sides.includes(right) ? 'Right' : Math.max(...sides) > right ? 'Obtuse' : 'Acute';
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));