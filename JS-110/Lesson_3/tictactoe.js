const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const SCORES = {Player: 0, Computer: 0};
const WIN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}
function playerSymbols() {
  console.log(` You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board), ', ', 'or')})`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}
function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];

    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function displayWinOrTie(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function makeMoves(board) {
  let currentPlayer = 'player';
  while (!someoneWon(board) || !boardFull(board)) {
    displayBoard(board);
    prompt(`Player: ${SCORES.Player}, Computer: ${SCORES.Computer}`);;

    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
  }
}
function joinOr(array, separator, string) {
  if (array.length <= 1) {
    return array.join(""); 
  } else if (array.length === 2) {
    return array.join(` ${string} `); 
  } else {
    const lastTwoElements = array.slice(-2).join(` ${string} `);
    return array.slice(0, -2).concat(lastTwoElements).join(separator);
  }
}
function updateScore(SCORES, board) {
  if (detectWinner(board) === 'Player') {
    SCORES.Player += 1;
  } else if (detectWinner(board) === 'Computer') {
    SCORES.Computer += 1;
  }  
  return SCORES;
}
function chooseSquare(board, currentPlayer) {
  currentPlayer === 'player' ? playerChoosesSquare(board) : computerChoosesSquare(board);
}
function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}
function gamePlay(SCORES) {
  prompt('Welcome to Tic-Tac-Toe, Prepare to Lose Sucker!!');
  let answer = true;
  while (SCORES.Computer !== WIN_MATCH && SCORES.Player !== WIN_MATCH && answer) {
    let board = initializeBoard();
    playerSymbols();
  
    makeMoves(board);

    displayBoard(board);
  
    displayWinOrTie();
  
    updateScore(SCORES, board);
    prompt(`Player: ${SCORES.Player}, Computer: ${SCORES.Computer}`);

    gameWinner(SCORES);

    answer = playAgain();
  }
  prompt(`Thank you for playing tic-tac-toe!`);
}
function gameWinner(SCORES) {
  if (SCORES.Player === WIN_MATCH) {
    SCORES.Player = 0;
    SCORES.Computer = 0;
    prompt('You just got lucky, You WON!')
    
  } else if (SCORES.Computer === WIN_MATCH) {
    SCORES.Player = 0;
    SCORES.Computer = 0;
    prompt('YOU LOSE SUCKER!!')
  }
}
function playAgain() {
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  while (answer !== 'y' && answer !== 'no') {
    prompt(`${answer} is not a valid option. Please select yes or no`);
    answer = readline.question().toLowerCase()[0];
  }
  return answer === 'y';
}

// ** game starts **

gamePlay(SCORES);





