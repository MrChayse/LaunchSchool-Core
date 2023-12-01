/*
create a i to increment for the string position
create an output array for the return value
push the string sliced from the first index to i + 1 to the output array 
return the output array once basecase is met.
*/

// const leadingSubstrings = (string, i = 0, output = []) => {
//   if (i === string.length) return output;
//   output.push(string.slice(0, i + 1));
//   return leadingSubstrings(string, i + 1, output)
// }

// console.log(leadingSubstrings('xyzzy'));

const leadingSubstrings = (string) => {
  return string.split('').reduce((output, _, index) => {
    const substring = string.slice(0, index + 1);
    output.push(substring);
    return output;
  }, []);
};

console.log(leadingSubstrings('xyzzy'));
