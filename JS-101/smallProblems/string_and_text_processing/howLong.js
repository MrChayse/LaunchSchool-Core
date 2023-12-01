/*
concat each element with it's length property
return the array
*/

const wordLengths = (string) => {
  return string.split(' ').reduce((acc, curr) => {
     curr = curr + ' ' + curr.length;
     acc.push(curr);
     return acc;
  }, []);
}
console.log(wordLengths('baseball hot dogs and apple pie'));