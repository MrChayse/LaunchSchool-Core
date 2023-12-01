/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/*
Ask the user for two numbers:
- Initialize a variable readline to utilize readline-sync
- console.log to ask user for numbers
- console.log to ask user for operation
- console.log the result of the operation on the numbers
use readline sync prompt method
initialize a variable for output of prompt method
convert the variables type from a string to a number
use a conditional to determine what operation the user
wants to perform
initialize a result variable for the output of the
operation on the values provided by the user.

instead of using console.log on all of the user input,
	declare a function prompt that takes a message as input.
	the message will be requesting user input.
insted of if else conditional i can use a switch
	statement.
If a number is invalid, invoke the prompt function with
	the input "please provide a valid number."
To determine if a number is vali
*/
const LANGUAGE = 'English';

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

const messages = (message, lang) => {
	return MESSAGES[lang][message];
};
const promptInput = (key) => {
	let message = messages(key, LANGUAGE);
	console.log(`${message}`);
};

prompt(messages('welcome'));

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);