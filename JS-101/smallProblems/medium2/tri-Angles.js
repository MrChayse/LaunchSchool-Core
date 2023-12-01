/*
right - 90 degrees
acute - less than 90 degrees
obtuse - greater than 90 degrees
sum of angles MUST be 180 degrees and angles must be greater than 0
*/

const triangle = (a, b, c) => {
  const SUM = a + b + c;
  const MAX = Math.max(a, b, c);
  if (SUM < 180 || Math.min(a, b, c) <= 0) return 'invalid';

  return MAX > 90 ? 'obtuse' : MAX < 90 ? 'acute' : 'right';
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(50, 50, 50));
console.log(triangle(0, 90, 90));