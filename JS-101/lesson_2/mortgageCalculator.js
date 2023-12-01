/* eslint-disable indent */
/* eslint-disable no-tabs */
/*
Initialize a variable readline to require readline-sync

Initialize a loan amount variable to the value of the readline question method.
console.log the loan amount for the user to see.
Initialize an interest variable to the value of the readline question method.
	The user input should be divided by 100 to move the decimal.
	console.log the interest variable in percent form (*100) for user to see.
Initialize a variable duration to the value of the readline question method.
console.log duration for the user to see.
Initialize a monthly interest variable to the value of
	loan amount * (interest rate / (1 - Math.pow((1 + interest rate),(-n)
	monthly interest is APR / duration * loan amount.

*/
const readline = require('readline-sync');
const MESSAGES = require('./mortgage-calculator-messages.json');

const prompter = (message) => {
	console.log(`=>${message}`);
};

const invalidNumber = (num) => {
	return Number(num.trim()) === '' ||
	Number(num) < 0 ||
	Number.isNaN(Number(num));
};

const loanAmount = () => {
	prompter(MESSAGES.askLoanAmount);
	let amount = readline.question();
	while (invalidNumber(amount)) {
		prompter(MESSAGES.invalidNumber);
		amount = readline.question();
	}
	return Number(amount);
};

const interest = () => {
	prompter(MESSAGES.askInterest);
	let APR = readline.question();
	while (invalidNumber(APR)) {
		prompter(MESSAGES.invalidNumber);
		APR = readline.question();
	}
	return Number(APR);
};

const duration = () => {
	prompter(MESSAGES.askLoanDuration);
	let length = readline.question();
	while (invalidNumber(length)) {
		prompter(MESSAGES.invalidNumber);
		length = readline.question;
	}
	return Number(length);
};

const monthlyPayment = (monthlyInterest, price, time ) => {
	let result;
	if (duration === 0) result = price;
	else if (monthlyInterest === 0) result = price / time;
	else {
		result = price * (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-time))));
	}
	return result.toFixed(2);
};
const outputMessage = (payment, value, time, APR) => {
	console.log(`For a $${value} loan with a duration of ${time} months and a ${APR}% APR, the monthly payment is $${payment}.`);
};


const newCalculator = () => {
	prompter(MESSAGES.askNewCalculation);
	let feedback = readline.question();
	while (!['y', 'n', 'yes', 'no'].includes(feedback.toLowerCase())) {
		prompter(MESSAGES.invalidNewCalculation);
		feedback = readline.question();
	}
	return feedback.toLowerCase();
};

console.clear();
prompter(MESSAGES.greetings);

while (true) {
	const value = loanAmount();
	const loanLength = duration();
	const interestVal = Number(interest() / 100);
	const months = Number(loanLength * 12);
	const interestMonth = interestVal / 12;
	const payment = monthlyPayment(interestMonth, value, months);

	outputMessage(payment, value, months, interestVal);

	let newLoan = newCalculator();

	if (['n', 'y'].includes(newLoan)) {
		break;
	} else {
		console.clear();
	}
}
console.clear();