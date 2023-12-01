/*
Input: string
Output: the length of the longest vowel substring within the string

vowels are - 'aeiou'
create a regex to establish NOTvowels
use the split method to split the input at the regex to create an array of the string with only 
  spaces and vowels.
iterat thru the array.
create a max variable.
create a count variable
if the value is not a space, increment count by 1
compare max with count, if count is greater than max re-assign max the value of count
if the value is a space, count is reset to 0
once the iteration is complete, return the value of count.

*/

const solve = (string) => {
  const regex = /[^aeiou]/gi;
  let vowels = string.split(regex);

  let onlyVowels = vowels.filter((el) => el.length > 0).map(el => el.length);
  return Math.max(...onlyVowels);
}
//const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

console.log(solve("codewarriors"));
console.log(solve("suoidea"));
console.log(solve("ultrarevolutionariees"));
console.log(solve("strengthlessnesses"));
console.log(solve("cuboideonavicuare"));
console.log(solve("chrononhotonthuooaos"));
console.log(solve("iiihoovaeaaaoougjyaw"));

