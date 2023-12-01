// Question 1
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);
//Bonus
numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]);
// Question 2
let str1 = "Come over here!";
let str2 = "What's up, Doc?";
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));
// Question 3
let ages = {Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10};
console.log(ages.hasOwnProperty('Spot'));
// Question 4
let munstersDescription = 'the Munsters are Creepy and Spooky.';
console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());
// Question 5
console.log(false == '0');
console.log(false === '0');
// Question 6
ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = {Marilyn: 22, Spot: 237};
ages = Object.assign(ages, additionalAges);
console.log(ages);
// Question 7
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1 = str1.slice(0, str1.indexOf('house'));
console.log(str1);
// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);
// Question 9
flintstones.push("Dino", "Hoppy");
// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(str1);
