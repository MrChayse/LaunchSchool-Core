/*
sum of two shortest must be greater than the longest side.
all sides greater than 0
if all sides are equal retun equilateral, if two sides are equal return isosceles
  if all three sides are different lengths return scalene
*/

function triangle(a, b, c) {
  if ( a+b+c < Math.max(a, b, c)*2 || Math.min(a, b, c) <= 0) return "invalid";
  if (a===b && a===c && b===c) return "equilateral";
  else if (a!==b && a!==c && b!==c) return "scalene";
  else return "isoceles";
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(3, 1, 1));