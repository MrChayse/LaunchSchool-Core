/*
create a sum variable initialized to the value of 0
reassign the sum the value of adding the next index

*/

const sumOfSums = (arr) => {
  let sum = 0;
  return arr.reduce((acc, curr) => {
    sum += curr;
    return acc += sum;
  }, 0);
}

console.log(sumOfSums([3, 5, 2])); // 21
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35



