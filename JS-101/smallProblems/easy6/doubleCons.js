/*
create a regular expression for vowels.
create an output string
iterate thru string
if the current element is not a a vowel,
concat the new string with the element x 2
else concat the element to the new string
*/
const doubleCons = (str, i = 0, output = "") => {
  if (i === str.length) return output;
  const char = str[i];
  /[aeiouAEIOU]/.test(char) ? output += char : output += char + char;
  return doubleCons(str, i + 1, output);
}

console.log(doubleCons('Hello-World!'));