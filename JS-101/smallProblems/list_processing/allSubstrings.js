/*
create an output arr
split the string to get all values
newStr will concat each value of the split string arrays elements.
newStr is pushed to the output array

*/
const substrings = (string) => {
  const charArr = string.split('');
  return charArr.reduce((acc, _, index) => {
    acc.push(charArr.slice(0, index + 1).join(''));
    return acc;
  }, [])
}
console.log(substrings('abcde'));

