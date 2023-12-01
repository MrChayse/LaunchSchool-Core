/*
input : an array
output: a NEW array
  reduce can iterate thru the sub arrays, the callback can sort the arrays,
  and reduce can create a new array
  map method on each subarray can create a new aray for each subarray
sort either alphabetically or numerically in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.reduce((acc, subArr) => {
    typeof subArr[0] === 'number' ? subArr.sort((a, b) => a - b) : subArr.sort();
    acc.push(subArr);
    return acc;
}, [])

console.log(newArr);
