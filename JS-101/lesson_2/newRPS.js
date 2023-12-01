/*
getting and validating the player's choice
getting the computer's choice
updating the scores
checking whether a player's score has reached the winning number of wins
reporting the user's and computer's move choices
reporting the scores
getting and validating whether the user would like to play again.
resetting the scores
*/
const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};
const WINNING_SCORE = 5;

const winners = { userWinCount: 0, computerWinCount: 0 };

const prompt = (message) => {
  console.log(`=> ${message}`);
};

const updateScore = (whoWins, winners) => {
  if (whoWins === true) {
    winners.userWinCount += 1;
  } else if (whoWins === false) {
    winners.computerWinCount += 1;
  }
};

const checkForWin = (winners) => {
  if (winners.userWinCount === WINNING_SCORE) {
    prompt('You WIN');
  } else if (winners.computerWinCount === WINNING_SCORE) {
    prompt('GAME OVER.');
  }
};

const playAgain = (winners) => {
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'y') {
    winners.userWinCount = 0;
    winners.computerWinCount = 0;
  }
};

const getUserChoice = () => {
  while (true) {
    const userInput = readline.question().toLowerCase();
    if (VALID_CHOICES.includes(userInput)) {
      return userInput;
    } else {
      prompt('Invalid choice. Please choose from rock, paper, scissors, lizard, or spock.');
    }
  }
};

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return null; // It's a tie
  }
  return WINNING_COMBOS[userChoice].includes(computerChoice);
};

while (true) {
  prompt("Welcome to the Rock Paper Scissors Game. You're Going Down!");
  prompt(`Make your move Dummy. You can choose from ${VALID_CHOICES.join(', ')}`);

  const userMove = getUserChoice();
  const computerMove = getComputerChoice();

  prompt(`You chose: ${userMove}`);
  prompt(`Computer chose: ${computerMove}`);

  const winner = determineWinner(userMove, computerMove);

  if (winner === null) {
    prompt("It's a tie!");
  } else if (winner) {
    prompt("You win this round!");
  } else {
    prompt("Computer wins this round!");
  }

  updateScore(winner, winners);

  prompt(`The score is ${winners.userWinCount} to ${winners.computerWinCount}.`);
  checkForWin(winners);

  // eslint-disable-next-line max-len
  if (winners.userWinCount >= WINNING_SCORE || winners.computerWinCount >= WINNING_SCORE) {
    prompt('Do you want to play again? (y/n)');
    playAgain(winners);
  }
}
