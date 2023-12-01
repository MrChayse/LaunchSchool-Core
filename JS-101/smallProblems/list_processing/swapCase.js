/*
iterate thru the input string.
if current element is uppercase change it to lowercase.
if current element is lowercacse change it to lowercase
return the string.
*/

const swapCase = (string, i = 0, newStr = '') => {
  if (i === string.length) return newStr;

  if (string[i] === string[i].toUpperCase()) {
    newStr += string[i].toLowerCase();
  } else if (string[i] === string[i].toLowerCase()) {
    newStr += string[i].toUpperCase();
  }
  return swapCase(string, i + 1, newStr);
}

console.log(swapCase('Tonight on XYZ-TV'));

const swapperCase = (string) => {
  return [...string].map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('');
}

console.log(swapperCase('Tonight on XYZ-TV'));
