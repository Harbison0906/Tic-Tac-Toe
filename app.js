
let board = [
  ["t l", "t m", "t r"],
  ["c l", "c m", "c r"],
  ["b l", "b m", "b r"]
];

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

let squares = document.querySelectorAll('.row > div');
let playerNumber = "X";

squares.forEach(function (square) {
  square.addEventListener('click', squareClicked);
});

function squareClicked(e) {
  let turnInfo = {
    player: playerNumber,
    position: e.target.className
  }

  if (playerNumber === "X") {
    e.target.textContent = 'X';
    updateBoard(turnInfo);
    checkForWin(board, playerNumber);
    playerNumber = "O";
  } else {
    e.target.textContent = 'O';
    updateBoard(turnInfo);
    checkForWin(board, playerNumber);
    playerNumber = "X";
  }
};

function updateBoard(turnInfo) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (turnInfo.position === board[i][j]) {
        board[i][j] = turnInfo;
      }
    }
  }
};

function checkForWin(board, playerNumber) {
  checkForThreeHorizontal(board, playerNumber);
  checkForThreeVertical(board, playerNumber);
  //checkForThreeDiagonal(board, playerNumber);
};


function checkForThreeHorizontal(board, playerNumber) {
  let matcher = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].player) {
        if (board[i][j].player === playerNumber) {
          matcher += 1;
        }
      }
      if (matcher === 3) {
        displayWinner(playerNumber);
      }
    }
    matcher = 0;
  }
};


function checkForThreeVertical() {
  let currentPlayer = 'X'
  for (let i = 0; i < winningCombos.length; i++) {
    let sum = 0;
    let combo = winningCombos[i];
    for (let j = 0; j < combo.length; j++) {
      if (squares[combo[j]].textContent === currentPlayer) {
        sum++;
        currentPlayer = 'O'
      }
      if (sum === 3) {
        displayWinner(currentPlayer);
      }
    }

  }
}


//function checkForThreeDiagonal() {
//console.log("Cannot yet check for a three diagonal win");//


function displayWinner(currentPlayer) {
  alert(`Player ${currentPlayer} wins!`)
}


