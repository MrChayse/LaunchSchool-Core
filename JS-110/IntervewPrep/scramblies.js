/*
Input: string 1 , string2
Output: boolean if a portion of string 1 characters can be re-arranged to match string 2.
Algorithm: 
split string1 into an array of letters. if every value of string 2 has an index in string1 return true
  if not return false.
*/

const scramble = (string1, string2) => {
  const charCount = {};

  for (const char of string1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return [...string2].every((char) => (charCount[char] -= 1) >= 0);
};


// const scramble = (string1, string2) => {
//   if (string1.length < string2.length) return false;
//   if (string1 === string2) return true;
//   const letters = [...string2].reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
  
//   for (const letter of string1) {
//     if (letters[letter] && letters[letter] !== 0) letters[letter] -= 1; 
//   }

//   return Object.values(letters).every((el) => el === 0);
// }

// function scramble(str1, str2) {
//   let occurences = [...str1].reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }
    

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas','steak'));
console.log(scramble('scriptjavx','javascript'));
console.log(scramble('jscripts','javascript'));
console.log(scramble('commas','commas'));