/*
Initialize a variable readline to the value of require readline-sync
Initialize a variable for 6 numbers using readline prompt to attain values from 
  the user.
push each value into an array.
if the array includes the value of the 6th variable,
  console.log(The number 6th number appears in the arr.join(, ))
*/
// const readline = require("readline-sync");
// const output = [];
// console.log("Please enter the first number.");
// const number1 = parseInt(readline.prompt());
// output.push(number1);
// console.log("Please enter a second number.");
// const number2 = parseInt(readline.prompt());
// output.push(number2);
// console.log("Please enter the third number.");
// const number3 = parseInt(readline.prompt());
// output.push(number3);
// console.log("Please enter the fourth number.");
// const number4 = parseInt(readline.prompt());
// output.push(number4);
// console.log("Please enter the fifth number.");
// const number5 = parseInt(readline.prompt());
// output.push(number5);
// console.log("Please enter the final number.");
// const number6 = parseInt(readline.prompt());

// if (output.includes(number6)) {
//   console.log(`The number ${number6} appears in ${output.join()}.`);
// } else {
//   console.log(`The number ${number6} does not appear in ${output.join()}.`);
// }

// ========================= for loop version ===============================
const search101 = (i = 1,num, output = []) => {
  const readline = require('readline-sync');
  
  if (i === num -1) {
    console.log("Please enter the final number.");
    const finalNum = parseInt(readline.prompt());
    const result = output.includes(finalNum);
    console.log(`The number ${finalNum} ${result ? 'appears' : 'does not appear'} in the list ${output.join()}.`);
  }  
  
  console.log(`Please enter the ${i}${i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} number`);
  output.push(parseInt(readline.prompt()));
  return search101(i + 1, num, output);
}

