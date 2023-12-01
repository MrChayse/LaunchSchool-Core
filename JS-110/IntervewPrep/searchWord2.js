/*
Input: target word to search for, text
Output: The input text with the target word highlighted
  the highlighted word would be **WORD**

Algorithm:
split the input string into an array of words.
if the current word in the array of strings is equal to the target word,
  reassign the value of the target word to the new highlighted target word.
when the iteration is complete return the array of words joined to a string.
Code:

*/

// const searchWord = (word, string, i = 0) => {
//   const strArr = string.split(' ');

//   if (i === strArr.length) return strArr.join();

//   if (strArr[i].toLowerCase() === word) {
//     strArr[i] = `**${word.toUpperCase()}**`;
//   }
//   return searchWord(word, strArr.join(' '), i + 1);

// }

// const searchWord = (word, string) => {
//   const regex = new RegExp(`\\b${word.toLowerCase()}\\b`, 'gi');
//   return string.replace(regex, `**${word.toUpperCase()}**`);
//}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// console.log(searchWord('sed', text));
console.log(text.split(' '));
console.log(text.split(/\b/));
