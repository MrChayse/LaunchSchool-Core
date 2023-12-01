//********Question 1 ****************
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
} // Will the following functions return the same results?
console.log("NO. if a semi-colon is not present in the return statement /n, JavaScript will implicitely place it.");
/* *********  Question 2************
What does the last line in the following code output?
*/
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); 
console.log(object); // [1, 2] they point to the same array Object in memory.
/* ***************Question 3 *************
What will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
// ***********
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
// *************
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
*/
console.log('A - one, two, three ');
console.log('B - one, two, three');
console.log('two, three, one');