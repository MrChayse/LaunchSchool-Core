
/*
Input: the target word, and the text.
Output: the number of times the word appearsin the text.
Algorithm:
assign a regular expression the value of the input word
invoke the match method on the input string with the regular expression as the 
  argument.
return the return value of the match method invocations length property.
*/

// const searchWord = (word, string) => {
//   const regex = new RegExp(word, 'gi');
//   return string.match(regex).length || 0;
// }

const searchWord = (word, string) => {
  return string.split(' ').filter((el) => el.toLowerCase() === word).length;
}
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));
