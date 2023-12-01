/*
Input: array of values
Outpuf: array of values sorted from least go greatest ( a - z or 1 - 10)
compare values at index 0 and index 1
if value at index 0 is greater than index 1, swap the values and keep iterating

*/

const bubbleSort = () => {

}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]