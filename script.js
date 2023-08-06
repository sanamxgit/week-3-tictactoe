let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';

let moveList = ['Rock', 'Paper', 'Scissors'];

function startGame() {
  let buttons = document.querySelectorAll('.game-button-wrapper button');

  buttons.forEach((button) => {
    button.addEventListener('click', makeMove);
  });
}

function calcResult(move1, move2) {
  if (move1 === move2) {
    return tieMsg;
  } else if (
    (move1 === 'Rock' && move2 === 'Scissors') ||
    (move1 === 'Paper' && move2 === 'Rock') ||
    (move1 === 'Scissors' && move2 === 'Paper')
  ) {
    return winMsg;
  } else {
    return loseMsg;
  }
}

function randomMove() {
  return Math.floor(Math.random() * 3);
}

function makeMove(event) {
  let playerMove = event.target.textContent;
  let computerMove = moveList[randomMove()];

  let statusDisplay = document.querySelector('#status-head');
  let moveDisplays = document.querySelectorAll('.move-display h2');

  let result = calcResult(playerMove, computerMove);
  statusDisplay.textContent = result;

  moveDisplays[0].textContent = `Player: ${playerMove}`;
  moveDisplays[1].textContent = `Computer: ${computerMove}`;

  let buttons = document.querySelectorAll('.game-button-wrapper button');

  buttons.forEach((button) => {
    button.removeEventListener('click', makeMove);
  });

  endGame();
}

function endGame() {
  setTimeout(() => {
    let buttons = document.querySelectorAll('.game-button-wrapper button');
    let statusDisplay = document.querySelector('#status-head');

    buttons.forEach((button) => {
      button.style.display = 'none';
    });

    statusDisplay.textContent = 'Game Over';

    let resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.addEventListener('click', resetGame);
    document.body.appendChild(resetButton);
  }, 2000);
}

function resetGame() {
  let moveDisplays = document.querySelectorAll('.move-display h2');
  let statusDisplay = document.querySelector('#status-head');
  let resetButton = document.querySelector('button');

  moveDisplays[0].textContent = '';
  moveDisplays[1].textContent = '';
  statusDisplay.textContent = 'Choose!';

  resetButton.parentNode.removeChild(resetButton);

  let buttons = document.querySelectorAll('.game-button-wrapper button');

  buttons.forEach((button) => {
    button.style.display = 'inline-block';
    button.addEventListener('click', makeMove);
  });
}

startGame();
