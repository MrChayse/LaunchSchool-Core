/*
Input: sentence
Output:the sentence reversed
convert the sentence into an array, reverse the array, join the array.


*/

const reverseSentence = (sentence) => {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));