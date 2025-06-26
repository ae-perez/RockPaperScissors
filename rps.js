console.log(`
    *******************
    **               **
    **               **
    **  TIC TAC TOE  **
    **               **
    **               **
    *******************  `);

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore,
  computerScore = 0;

function getComputerChoice() {
  //odin says that this could be done without an array
  let options = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * options.length);
  let choice = options[index];

  return choice;
}

function getHumanChoice() {
  let choice = prompt('Please enter your choice').toLowerCase();

  if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
    prompt('That was an invald choice. (Please enter rock, paper or scissors)');
  }

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let firstRound = false;

  for (let i = 0; i < 5; i++) {
    if (firstRound == false) {
      console.log(playRound(humanChoice, computerChoice));
      firstRound = true;
    } else {
      computerChoice = getComputerChoice();
      humanChoice = getHumanChoice();
      console.log(playRound(humanChoice, computerChoice));
    }

    console.log(`
    *****************************
    *****  ROUND ${i + 1} SCORE *****
    ***************************** `);
    console.log('YOU: ' + humanScore + ' COMPUTER: ' + computerScore);
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    results = '';

    switch (humanChoice) {
      case 'rock':
        if (computerChoice == 'paper') {
          results = 'You LOSE! Paper beats Rock!';
          computerScore += 1;
        } else if (computerChoice == 'scissors') {
          results = 'You WIN! Rock beats Scissors';
          humanScore += 1;
        } else {
          results = 'ITS A TIE!';
        }
        break;

      case 'paper':
        if (computerChoice == 'scissors') {
          results = 'You LOSE! Scissors beats Paper!';
          computerScore += 1;
        } else if (computerChoice == 'rock') {
          results = 'You WIN! Paper beats Rock!';
          humanScore += 1;
        } else {
          results = 'ITS A TIE!';
        }
        break;
      case 'scissors':
        if (computerChoice == 'paper') {
          results = 'You WIN! Scissors beats Paper!';
          humanScore += 1;
        } else if (computerChoice == 'rock') {
          results = 'You LOSE! Rock beats Scissors!';
          computerScore += 1;
        } else {
          results = 'ITS A TIE!';
        }
        break;
    }

    return results;
  }
}

playGame();
