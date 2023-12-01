const readline = require('readline-sync');
const BLACKJACK = 21;
const DEALER_STAY = 17;
const TOTALS = {Player: [], Dealer: []};
const CARDS = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 
  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 
  'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];
const deck = shuffleCards(CARDS);
let USER_NAME = 'Player';
let funds = 100000;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function shuffleCards(CARDS, i = 0) {
  if (i === CARDS.length) return CARDS;

  let randomIndex = Math.floor(Math.random() * (CARDS.length - i)) + i;
  [CARDS[i], CARDS[randomIndex]] = [CARDS[randomIndex], CARDS[i]];

  return shuffleCards(CARDS, i + 1);
}

function aceValue(sum) {
  return sum + 11 > BLACKJACK ? 1 : 11;
}

function dealCards(player1, player2, numCards, i = 0) {
  if (i === numCards) return;
  player1.push(deck.shift());
  player2.push(deck.shift());
  return dealCards(player1, player2, numCards, i + 1)
}
function getPlayerName() {
  prompt('What is your Name or Alias?');
  const name = readline.question().trim();
  return name;
}

function cardTotals(player) {
  const faces = ['J', 'Q', 'K'];
  const ace = 'A';
  return player.reduce((acc, curr) => {
    if (faces.includes(curr)) {
      curr = 10;
      acc += curr;
    } else if (curr === ace) acc += aceValue(acc);
    else acc += curr;
    return acc;
  }, 0);
}

function playerMove() {
  prompt(`${USER_NAME}: ${TOTALS.Player.join()}, Dealer: ${TOTALS.Dealer[0]}`);
  let sum = cardTotals(TOTALS.Player);
  
  while (sum < BLACKJACK) {
    prompt('Your Turn. Hit or Stay?');
    let answer = readline.question().trim().toLowerCase();
    
    if (answer === 'stay') {
      return sum;
    } else if (answer === 'hit') {
      TOTALS.Player.push(deck.shift());
      sum = cardTotals(TOTALS.Player);
      prompt(`${USER_NAME}: ${TOTALS.Player.join()}, Dealer: ${TOTALS.Dealer[0]}`);
    } else {
      prompt('That is not a valid move. Please select hit or stay.');
    }
  }

  return sum;
}



function dealerMove() {
  prompt(`${USER_NAME}: ${TOTALS.Player.join()}, Dealer: ${TOTALS.Dealer.join()}.`);
  let dealerSum = cardTotals(TOTALS.Dealer);
  
  while (dealerSum < DEALER_STAY) {
    TOTALS.Dealer.push(deck.shift());
    prompt(`${USER_NAME}: ${TOTALS.Player.join()}, Dealer: ${TOTALS.Dealer.join()}.`);
    dealerSum = cardTotals(TOTALS.Dealer);
  }
  return dealerSum;
}
function reset(obj) {
  obj.Player = [];
  obj.Dealer = [];
  return obj;
}

function playHand(player, count = 0, output = {}) {
  if (count === 2) return output;
  if (player === `${USER_NAME}`) {
    output.playerScore = playerMove();
  } else if (player === 'dealer') {
    output.dealerScore = dealerMove();
  }
  return playHand(alternatePlayers(player), count + 1, output);
}



function alternatePlayers(player) {
  return player === `${USER_NAME}` ? 'dealer' : `${USER_NAME}`;
}

function detectWinner(playerScore, dealerScore) {
  switch (true) {
    case playerScore > 21:
      return 'Dealer!';
    case dealerScore > 21:
      return `${USER_NAME}`;
    case playerScore > dealerScore:
      return `${USER_NAME}`;
    case dealerScore > playerScore:
      return 'Dealer!';
    default:
      return 'It\'s a draw!';
  }
}

function displayWinner(playerScore, dealerScore) {
  prompt(`The Winner is ${detectWinner(playerScore, dealerScore)}`);
}

function fundsAdjust(funds, playerBet, playerScore, dealerScore) {
  const winner = detectWinner(playerScore, dealerScore);
  if (winner === `${USER_NAME}`) {
    funds += playerBet * 2;
  } else if (winner === 'dealer') {
    funds -= playerBet;
  }
  return funds;
}


function placeBet() {
  let bet;

  while (true) {
    prompt(`You have $${funds}. Place your Bet `);
    bet = parseInt(readline.question().trim(), 10);

    if (!isNaN(bet) && bet <= funds) {
      funds -= bet;
      break; 
    } else {
      prompt('Invalid input or your bet exceeds available funds. Please place your bet.');
    }
  }
  return bet;
}
function gamePlay(deck) {
  console.clear();
  prompt('Welcome to BlackJack! Place your bet, GIMME YOUR MONEY!');
  let answer = true;
  let currentPlayer = getPlayerName();
  USER_NAME = currentPlayer;
  while (answer && funds > 0) {
    reset(TOTALS);
    const wager = placeBet();

    dealCards(TOTALS.Player, TOTALS.Dealer, 2,);
    const scores = playHand(currentPlayer);
    
    prompt(`${currentPlayer}: ${scores.playerScore} Dealer: ${scores.dealerScore}`);
    
    const winner = detectWinner(scores.playerScore, scores.dealerScore);
    displayWinner(scores.playerScore, scores.dealerScore);
  
    funds = fundsAdjust(funds, wager, scores.playerScore, scores.dealerScore);

    answer = anotherRound();
    if (!answer || funds < 0) break;
  }
  prompt(`Thank you for Playing BlackJack! Your total loot is $${funds.toFixed(2)}`);
}

function anotherRound() {
  prompt('Do you want to play another round? (Yes or No)');
  let answer = readline.question().toLowerCase()[0];
  while (answer !== 'y' && answer !== 'n') {
    prompt(`${answer} is not a valid option. Please select yes or no`);
    answer = readline.question().toLowerCase()[0];
  }
  return answer === 'y';
}


// ** Game Play **
gamePlay(deck);

