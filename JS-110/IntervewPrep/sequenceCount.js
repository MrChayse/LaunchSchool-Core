/*
Input: count, starting number of a sequence
Output: an array with the same number of elements as the count parameter. The value of each element
  is a multiple of the starting number
initialize an output array.
initialze an incrementation variable to the value of 1.
multiply the starting number by the incrementation variable.
push this product into the output array
increment the incrementation variable
once the value of the incrementation variable is equal to the count value, stop iterating
*/

const sequenceCount = (count, start, i = 1, output = []) => {
  if (i > count) return output;

  output.push(start * i);
  return sequenceCount(count, start, i + 1, output);
}

console.log(sequenceCount(5, 1));
console.log(sequenceCount(4, -7));
console.log(sequenceCount(3, 0));
console.log(sequenceCount(0, 100000));