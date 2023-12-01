/*
Input: string
Output: the input string with the 4th letter of every 2nd word capitalized.

convert the string to an array of letters and characters(maybe split method)
create word counter variable initialized to the value of 1.
create an output variable initialized to the value of an empty string.
iterate thrue the array of strings
for every space character in the iteration, increment the word counter value
if the  word counter value is even and the length of the output variable divided by 4 has a 
  remainder of 3, capitalize the letter appended to it.
if not just append the letter to it.
return the output string.
*/

function toWeirdCase(str) {
  const words = str.split(' ');
  
  for (let i = 0; i < words.length; i += 1) {
    if (i % 2 !== 0) {
      words[i] = words[i].split('').map((el, index) => index % 4 === 3 ? el.toUpperCase() : el).join('');
    }
  }
  console.log(words.join(' '));
  return words.join(' ');
}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');