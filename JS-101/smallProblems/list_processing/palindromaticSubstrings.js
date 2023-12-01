/*
check if palindrome from the 0 to the last index of the string is
a palindrome
increment the start once the end reaches the end.
end is = start
return the output array once the end is greater than strings length property
if end is equal to the strings length property evaluate for the recursive call
  either increment end, or increment start and reassigne the end to the new 
  start value.
*/

const isPalindrome = string => {
  return string.length > 1 && string === string.split("").reverse().join("");
}

const palindromes = (string, start = 0, end = 0, output = []) => {
  if (end > string.length) return output;

  let cur = string.slice(start, end);
  if (isPalindrome(cur)) {
    output.push(cur);
  }

  // if endIndex reaches end, move the startIndex.
  if (end === string.length) {
    return palindromes(string, start + 1, start + 1, output);
  } else {
    return palindromes(string, start, end + 1, output);
  }
}
console.log(palindromes('hello-madam-did-madam-goodbye'));

