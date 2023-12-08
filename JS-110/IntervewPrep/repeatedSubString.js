/*
Input: string
Output: an array that contains the repeated string for the first element, and it's count of repeat
  for the second element. -> "ababab"  = ["ab", 3]
  if there is no repeated sub string within the string, the result is the input string and 1
Algorithm:
iterate thru the input string to find the pattern.
once the pattern is found, get the number of occurrences of the pattern.
  (split the string at the patter? divide the string length by the pattern length?)
return an array with the pattern as element 0 and the repeat count as element 1.
*/

function repeatCount(string) {

  for (let i = 1; i <= string.length / 2; i++) {
    const substring = string.slice(0, i);
    const repeatedString = substring.repeat(string.length / i);

    if (repeatedString === string) {
      return [substring, string.length / i];
    }
  }

  return [string, 1];
}



// console.log(repeatCount("ababab"));
// console.log(repeatCount("abcde"));

let string = "liuvailuvbiluvc";
for (let i = 0; i < string.length / 2; i += 1) {
  const substring = string.slice(0, i);
  const repeatedString = substring.repeat(string.length / i);
  repeatedString === string ? console.log([substring, string.length / i]) : console.log([string, 1]);
}