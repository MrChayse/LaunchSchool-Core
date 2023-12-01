let halvsies = arr => [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];

const inputArray = [1, 2, 3, 6, 4, 5, 7, 8];
console.log(halvsies(inputArray));

