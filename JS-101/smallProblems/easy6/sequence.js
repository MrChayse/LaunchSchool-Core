/*
create an empty array
unshift the num value into the array

*/
const sequence = (num, output = []) => {
  if (num === 0) return output;
  output.unshift(num);
  return sequence(num - 1, output);
}
console.log(sequence(14));