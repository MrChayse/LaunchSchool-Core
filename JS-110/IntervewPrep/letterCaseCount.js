const letterCaseCount = (string) => {
  return {
    UpperCase: (string.match(/[A-Z]/g) || []).length,
    LowerCase: (string.match(/[a-z]/g) || []).length,
    Neither: (string.match(/[^a-z]/gi) || []).length
  };
}  

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));