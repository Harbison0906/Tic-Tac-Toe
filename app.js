
let board = [
  ["t l", "t m", "t r"],
  ["c l", "c m", "c r"],
  ["b l", "b m", "b r"]
];

let squares = document.querySelectorAll('.row > div');
let playerNumber = "1";

squares.forEach(function (square) {
  square.addEventListener('click', squareClicked);
});

function squareClicked(e) {
  let turnInfo = {
    player: playerNumber,
    position: e.target.className
  }

  if (playerNumber === "1") {
    e.target.textContent = 'X';
    updateBoard(turnInfo);
    checkForWin(board, playerNumber);
    playerNumber = "2";
  } else {
    e.target.textContent = 'O';
    updateBoard(turnInfo);
    checkForWin(board, playerNumber);
    playerNumber = "1";
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
  checkForThreeDiagonal(board, playerNumber);
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
  //console.log("Cannot yet check for a three vertical win");//
}

function checkForThreeDiagonal() {
  //console.log("Cannot yet check for a three diagonal win");//
}

function displayWinner(playerNumber) {
  alert('Player ${playerNumber} wins!');
}
