const isPalindrome = (str, i = 0, j = str.length - 1) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (i === j) return true;

  if (str[i] === str[j]) {
    return isPalindrome(str,i + 1, j - 1);
  }
  return false;
};

console.log(isPalindrome('356a653'));       
console.log(isPalindrome('123ab321'));  