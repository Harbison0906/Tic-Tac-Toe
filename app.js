//  array of winning combinations

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let moveCount = 0
let gameOver = false;
let squares = document.querySelectorAll('.row > div');
let banner = document.querySelector('#result');
let playerNumber = "X";

// loops through the array of squares
squares.forEach(function (square) {
  square.addEventListener('click', squareClicked);
});

// as each square is clicked, it runs through every possible scenario/outcome
function squareClicked(e) {
  if (gameOver) {
    gameReset()
    return;
  }
  if (e.target.textContent === 'X' || e.target.textContent === 'O') {
    return;
  }
  if (playerNumber === "X") {
    e.target.textContent = 'X';
    checkWin();
    playerNumber = "O";
  } else {
    e.target.textContent = 'O';
    checkWin();
    playerNumber = "X";
  }
  moveCount++

  if (moveCount === 9) {
    banner.textContent = 'DRAW';
    gameOver = true;
  }
};

// checks for winning combos
function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    let sum = 0;
    let combo = winningCombos[i];
    for (let j = 0; j < combo.length; j++) {
      if (squares[combo[j]].textContent === playerNumber) {
        sum++;
      }

    }
    if (sum === 3) {
      displayWinner(playerNumber);
      gameOver = true;
    }
  }
}


function displayWinner(currentPlayer) {
  banner.textContent = `Player ${currentPlayer} wins!`
}

// resets game on first click after win/draw
function gameReset() {
  moveCount = 0;
  gameOver = false;
  playerNumber = 'X';
  banner.textContent = '';
  for (let square of squares) {
    square.textContent = '';
  }
}


