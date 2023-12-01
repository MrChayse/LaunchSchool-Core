// Question 1
let numbers = [1,2,3,4];
newNumbers = (numbers.splice(0, numbers.length));
console.log(numbers);
console.log(numbers.length = 0);
console.log(numbers = []);
// Question 2
console.log([1,2,3] + [4,5]);
// Question 3
console.log("hello there");
// Question 4
console.log([ { first: 42 }, { second: "value2" }, 3, 4, 5 ]);
// Question 5
function isColorValid(color) {
  return color === "blue" || color === "green" ? true : false;
}
const isColorValid = (color) => ['blue, green'].includes(color);
