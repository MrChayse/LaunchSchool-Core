/*
create a hashmap for lowercase, uppercase, and neither characters.
return an object that contains the percentage of each hashmap is to the entire string
the value is a string datatype.
*/

const letterPercentages = (string, output = {}) => {
  const LENGTH = string.length;

  const lowerStrArr = string.split('').filter((el) => el === el.toLowerCase());
  const upperStrArr = string.split('').filter((el) => el === el.toUpperCase());
  const otherArr = string.split('').filter((el) => el !== el.toUpperCase());

  output.lowerCase = ((lowerStrArr.length / LENGTH) * 100).toFixed(2);
  output.upperCase = ((upperStrArr.length / LENGTH) * 100).toFixed(2);
  output.other = ((otherArr.length / LENGTH) * 100).toFixed(2);

  return output;
};

console.log(letterPercentages('123')); // Example usage


console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));