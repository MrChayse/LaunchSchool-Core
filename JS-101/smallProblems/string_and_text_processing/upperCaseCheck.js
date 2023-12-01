/*
iterate thru the input string
if the current element of the string is true, continue iteration
  else return false
if iteration completes return true
*/

const isUppercase = (string, i = 0) => {
  if ( i === string.length) return true;

  while (string[i] === string[i].toUpperCase()) {
    return isUppercase(string, i + 1);
  }
  return false;
}

console.log(isUppercase('t')); 
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));
