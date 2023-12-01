/*
Input: string
Output: an array of all palindrome substrings of the input string. sorted by order of appearance in
  the input string. Duplicate strings should be included multiple times in the array.
Single Characters are not palindromes.
Case is a factor when determining palindrome.
Algorithm: 
create an output array to place all palindome sequences into.
split the string into an array of characters.
iterate thru the array of characters.
create a substring for each character within the array of characters and place this into an
  array of substrings.
Iterate thru the array of substrings.
if the current element of the substring reversed is equal to the current element, place this substring in the output array.
Once iteration is complete, return the output array.
*/

const leadingSubstrings = (string) => {
  return [...string].map((_, index, array) => array.slice(0, index + 1).join(''));
};

const substrings = (string) => {
   return [...string].map((el, index, arr) => {
    let currArr = arr.slice(index).join('');
    return leadingSubstrings(currArr);
  }).flat();
}

const palindromes = (string) => {
  const subStr = substrings(string);
  return subStr.filter((el) => {
    const reverseStr = el.split('').reverse().join('');
    if (el.length > 1 && el === reverseStr) return el;
  })
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));

