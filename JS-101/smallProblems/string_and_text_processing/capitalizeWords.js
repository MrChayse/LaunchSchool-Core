/*
initialize the variable i to 0
use split with a space as an argument to make the string an array of the words.
access the 0th element at i and invoke toUpperCase method on it
return the array with the join method invoked onece i is = to the array length.
*/

const wordCap = (string, i = 0) => {
  const strArr = string.split(' ');
  if (i === strArr.length) return strArr.join(' ');
  
  strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);

  return wordCap(strArr.join(' '), i + 1);
}

// console.log(wordCap('four score and seven'));
// console.log(wordCap('the javaScript language'));

const capWord = (string) => {
  return string.split(' ').reduce((acc, curr) => {
    return acc + (curr[0].toUpperCase() + curr.slice(1).toLowerCase() + ' ')
  }, "")
}
console.log(capWord('four score and seven'));



