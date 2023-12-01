const wordSizes = (str, i = 1, count = 0, output = {}) => {
  const word = str.split(' ');
  return word.reduce((acc, curr) => {
    let newWord = curr.toLowerCase().replace(/[^a-z]/g, '');
    let count = newWord.length;
    if(!(count in acc)) {
      acc[count] = 1;
    } else {
    acc[count] +=1;
    }
    return acc;
  }, {})
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
