/*

*/

const bubbleSort = (arr, i = 0) => {
  if (i === arr.length) return arr;
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }  
  }
  return bubbleSort(arr, i + 1);
}

console.log(bubbleSort([5, 3]));
console.log(bubbleSort([6, 2, 7, 1, 4]));
console.log(bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']))