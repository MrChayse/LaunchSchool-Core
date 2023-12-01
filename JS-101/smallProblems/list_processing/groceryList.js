/*
2 dimensional array input return 1 dimensional array. 
the fruit name appears the number of times the value associated with it
create a new array
initialize i to 0
access the input arrays element 0 
if element at index 0,1 is not 0, push the value at 0,0 to the new array
decrement the value at 0, 1
if the value at 0,1 is 0, increment i to the next array and start process over.

const buyFruit = (arr, i = 0, output = []) => { 
  if ( i === arr.length) return output;

  let fruit = arr[i][0]; let val = arr[i][1];

  while (val > 0) { 
    output.push(fruit); val -= 1; } 
    return buyFruit(arr, i + 1, output); 
  }

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
*/

const buyFruit = (arr) => {
  return arr.reduce((acc, curr) => {
    while (curr[1] > 0) {
      acc.push(curr[0]);
      curr[1] -= 1;
    }
    return acc;
  }, [])
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));