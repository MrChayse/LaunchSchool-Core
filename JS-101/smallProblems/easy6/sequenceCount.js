/*
create an output array
create an i variable that increments by 1
create a variable for i * num to push in array
if count is 0 return the output array
increment i by 1 , decrement count by 1 
*/
const sequence = (count, num, i = 1,  output = []) => {
  if (count ===  0) return output;
  const newNum = num * i
  output.push(newNum);
  return sequence(count - 1, num, i + 1, output);
}

console.log(sequence(4, -7));
