/*
Input: Number
Output: Array with values 1 up to the input value

create an output array variable
initiate an iterator variable to the value of 1
as longs as the iterator value is less than the input
push the value into the output array.

*/

const sequence = (num, i = 1, output = []) => {
  if (i > num) return output;

  output.push(i);
  return sequence(num, i + 1, output);
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));