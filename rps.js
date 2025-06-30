// console.log(`
//     ***************************
//     **                       **
//     **                       **
//     **  ROCK PAPER SCISSORS  **
//     **                       **
//     **                       **
//     ***************************  `);

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * options.length);
  let choice = options[index];

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // create three buttons for each selections
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  const scissors = document.getElementById('scissors');

  // ? add event listener to button that call your playRound with correct playerSelection
  rock.addEventListener('click', playRound);
  paper.addEventListener('click', playRound);
  scissors.addEventListener('click', playRound);

  function playRound(e) {
    if (humanScore >= 5 || computerScore >= 5) return;

    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let scoreBoard = document.getElementById('scoreboard');
    results = '';

    switch (humanChoice) {
      case 'rock':
        if (computerChoice == 'paper') {
          results = 'You LOSE! Paper beats Rock!';
          computerScore += 1;
          // scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore}
          //   ${results}`;
        } else if (computerChoice == 'scissors') {
          results = 'You WIN! Rock beats Scissors';
          humanScore += 1;
          // scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore}
          //   ${results}`;
        } else {
          results = 'ITS A TIE!';
          // scoreBoard.textContent = results;
        }
        break;

      case 'paper':
        if (computerChoice == 'scissors') {
          results = 'You LOSE! Scissors beats Paper!';
          computerScore += 1;
          // scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore}
          //   ${results}`;
        } else if (computerChoice == 'rock') {
          results = 'You WIN! Paper beats Rock!';
          humanScore += 1;
          // scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore}
          //   ${results}`;
        } else {
          results = 'ITS A TIE!';
          // scoreBoard.textContent = results;
        }
        break;
      case 'scissors':
        if (computerChoice == 'paper') {
          results = 'You WIN! Scissors beats Paper!';
          humanScore += 1;
          // scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore}
          //   ${results}`;
        } else if (computerChoice == 'rock') {
          results = 'You LOSE! Rock beats Scissors!';
          computerScore += 1;
          // scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore}
          //   ${results}`;
        } else {
          results = 'ITS A TIE!';
          // scoreBoard.textContent = results;
        }
        break;
    }

    //     scoreBoard.textContent = `You: ${humanScore}, Computer: ${computerScore} ...
    // ${results}`;

    if (humanScore === 5 || computerScore === 5) {
      const winner =
        humanScore > computerScore
          ? `YOU ARE THE WINNER!
          <br>
          You: ${humanScore}, Computer: ${computerScore}`
          : `COMPUTER WON!
          <br>
          You: ${humanScore}, Computer: ${computerScore}`;
      scoreBoard.innerHTML = winner;
    } else {
      scoreBoard.innerHTML = `${results}
      <br>
      You: ${humanScore}, Computer: ${computerScore}
`;
    }
  }
}

playGame();

// todo:
// * instead of the final score showing, just announce the winner
// * currently the final score shows, then user has to hit
// * a button one final time before the winner is announced
