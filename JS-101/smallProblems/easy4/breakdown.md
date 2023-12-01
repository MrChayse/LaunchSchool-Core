
``` JavaScript
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
```

# Breakdown

```JavaScript
const word = str.split(' ');```

the variable word is declared and initialized to the value of invoking the split method on the string parameter. This converts the string to an array of strings.

```JavaScript
return word.reduce((acc, curr) =>  let newWord = curr.      toLowerCase ().replace(/[^a-z]/g, '');
  let count = newWord.length;
  if(!count in acc) {
    acc[count] = 1
  } else {
  acc[count] += 1;
  } return acc;
  }, {});
  ```

  Invokes the reduce method on the word variable.(array).


  The newWord variable is declared and initialized to the evaluation of the replace method on the current element.

  The count variable is declared and initialized to the vale of the length proper