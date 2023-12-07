/*
Input: text
Output: the value of the longest vowel chain. (value = length).
Algorithm: 
define a vowels variable with a regular expression.
create an array of all of the vowels within the input string.
iterate thru the array to find the element with the largest length property
return the length of the element with the biggest length property.
*/

const solve = (text) => {
  let max = -Infinity;
  const regex = /[aeiou]+/gi;
  return (text.match(regex) || []).reduce((acc, curr) => {
    acc = Math.max(acc, curr.length);
    return acc;
  }, 0);
}

const vowelChainMax = (string, i = 0, j = 0, output = 0) => {
  if (i === string.length) return output;

  const vowels = 'aeiou';
  let count = 0;
  while (j < string.length && vowels.includes(string[j])) {
    count += 1;
    j += 1;
  }
  output = Math.max(count, output);
  return vowelChainMax(string, j, j + 1, output);
}

//console.log('codewarriors'.split(/[^aeiou]/).reduce((acc, curr) => Math.max(acc, curr.length), 0));

console.log(vowelChainMax("codewarriors"));
console.log(vowelChainMax("suoidea"));
console.log(vowelChainMax("ultrararevolutionariees"));
console.log(vowelChainMax("strengthlessnesses"));
console.log(vowelChainMax("cuboideonavicuarre"));
console.log(vowelChainMax("chrononhotonthuooaos"));
console.log(vowelChainMax("iiihoovaeaaaoougjyaw"));

console.log(solve("codewarriors"));
console.log(solve("suoidea"));
console.log(solve("ultrararevolutionariees"));
console.log(solve("strengthlessnesses"));
console.log(solve("cuboideonavicuarre"));
console.log(solve("chrononhotonthuooaos"));
console.log(solve("iiihoovaeaaaoougjyaw"));
