/*
Input: Strings concatenated together.
Output: The longest sentence of the concatenation based on the number of words.
  and the number of "words" in the sentence.
.! ? are sentence ending characters.
any other character is a word.
preserve the ending punctuation and the entire sentence when returning it.

Algorithm:
split the input into an array of sentences by separating the elements at the
  sentence ending characters. separete the words within the split sentences.
iterate thru this array. 
assign a max value to infinity.
If the value at the current element greater the the max value
assign the max value as the value of the current element.
Once iteration is complete, return the max value, and it's length property
Code:
declare a max variable to negaive infinity
use split with a regex that has a character class with the ending
  characters and any number of whitespace characters.
use the filter method to iterate thru the array of sentences.
if the sentence length property is greater than the value of max,
re-assign the max variable the value of the sentence.
Once iteration is complete, use the join method to join the value back to 
  a string type, and concate with the string "The longest sentence has ${string.length} words."
return this string.
*/

const longestSentence = (string) => {
  const regex = /[.!?]\s*/;
  let max = -Infinity;
  let output = string.split(regex).filter((sentence) => {
    max = Math.max(max, sentence.length);
    return sentence.length === max;
  }).join(' ');
  let outputValue = `\nThe longest sentence has ${output.length} words.`;
  return output + outputValue;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

  let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longText));

console.log(longestSentence(longerText));

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));

console.log(longestSentence("To be or not to be! Is that the question?"));

//let longSent = longText.split(/[.!?]\s*/);

// let maxLength = -Infinity;
// let longSentVals = longSent.filter((sentence) => {
//   maxLength = Math.max(maxLength, sentence.length);
//   return sentence.length === maxLength;
// }).join(' ');

// console.log(longSentVals);