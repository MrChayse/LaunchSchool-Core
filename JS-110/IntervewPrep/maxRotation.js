/*
Input: number
Output: The number with each digit rotated to the left the max amount of times.
  735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579
  the number is rotated it's length amount of times.
Algorithm:
convert the input number to a string
convert the string to an array
move the current element to the back of the array
if the current element is the last element, return the array converted to a number
*/

const maxRotation = (num, i = 0) => {
  let output = [...num.toString()];

  if (i === output.length - 1) return Number(output.join(''));

  const rotate = output.splice(i);
  output = Number(output.concat(rotate.slice(1), rotate[0]).join(''));

  return maxRotation(output, i + 1);
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
