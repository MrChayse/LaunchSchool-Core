/*
Input: string, string to search the input string for
Output: the number of times the seach string occurs in the input string

iterate thru the string.
make a window for the searchText length
check this window of the fullText for the Search Text
If the searchText exists, increment my count by 1, if not keep iterating
Once iterating is complete, return the amount of occurrences of the searchString
*/

const solution = (fullText, searchText, i = 0, count = 0) => {
  if (i === fullText.length) return count;
  let window = fullText.slice(i, i + searchText.length);

  count += window === searchText ? 1 : 0;

  return solution(fullText, searchText, i + 1, count);
}
console.log(solution('abcdeb', 'b'));
console.log(solution('abc','b'));
console.log(solution('abbc','bb'));

/*
create a regex for the searchText
use the string method match on the string with the created regex as the argument.
return the length of the array that the match method creates.
*/

const regexSolution = (fullText, searchText) => {
  return (fullText.match(new RegExp(searchText, 'g')) || []).length;
}

function otherSolution(fullText, searchText){
  return fullText.split(searchText);
}

console.log(otherSolution('abcdeb', 'b'));
console.log(otherSolution('abc','b'));
console.log(otherSolution('abbc','bb'));

// let string = "When the moon is in the sky the time is the best to get in the bed."
// let word = 'the';
// let window = word.length;
// console.log(string.slice(0, window)); ==> 'Whe'