// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replace('important', 'urgent'));
// Question 2
let numbers = [1, 2, 3, 4, 5];
let newArr = numbers.slice().reverse();
console.log(newArr);
let arrSort = [...numbers].sort((num1, num2) => num2 - num1);
console.log(arrSort);
console.log(numbers);
let arr = [];
numbers.forEach((el) => arr.unshift(el));
console.log(arr);
// Question 3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  
let number2 = 95; 
console.log(numbers.includes(number1)); //false
console.log(numbers.includes(number2)); // true
// Question 4
let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log("four score and " .concat(famousWords));
// Question 5
let numArr = [1,2,3,4,5];
numArr.splice(2,1);
console.log(numArr);
// Question 6
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"],["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);
console.log(flintstones);
let newFlintstones = flintstones.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log(newFlintstones);
// Qustion 7
let _flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
const barney = Object.entries(_flintstones).filter(el => el[0] === "Barney").shift();
console.log(barney);
// Question 8
let _numbers = [1, 2, 3, 4]; 
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Array.isArray(_numbers));
console.log(Array.isArray(table));
// Question 9
let title = "Flintstone Family Members";
let pad = Math.floor(40 - title.length / 2);
title.padStart(pad + title.length);
// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter(el => el === 't').length);
console.log(statement2.split('').filter(el => el === 't').length);




