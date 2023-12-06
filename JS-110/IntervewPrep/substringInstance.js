/*
Input: an input string, the value to search thhe input string for.
Output: the frequency of the search value within the input string.
Overlap is not permitted. --> ex. 'aaa' => 1 instance of 'aa' not two.
Algorithm: 
iterate thru the input string.
if the current value of the iterations is strictly equal with the searchVal, increment the count
  by 1.
Once iteration is complete, return the value of count.
Code:
It may be possible to use a regular expression with the string methods to get the desired output.
Experiment with the split method on the string at the searchVal for the delimiter
*/

const subStringInstanceCount = (string ,searchVal) => {
  const regex = new RegExp((searchVal), 'g');
  let matches = string.match(regex);
  return matches ? matches.length : 0;
}

const subStringCount = (string, searchVal) => {
  return string.split(searchVal).length - 1;
}
console.log(subStringInstanceCount('abcdeb','b'));
console.log(subStringInstanceCount('abc','b'));
console.log(subStringInstanceCount('abbc','bb'));

console.log(subStringCount('abcdeb','b'));
console.log(subStringCount('abc','b'));
console.log(subStringCount('abbc','bb'));

