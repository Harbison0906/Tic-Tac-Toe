const SYMBOLS = {
  x: 'X',
  o: 'O'
}
const RESULT = {
  incomplete: 0,
  playerXWon: SYMBOLS.x,
  playerOWon: SYMBOLS.o,
  tie: 3
}


let squares = document.querySelectorAll('.row > div');

squares.forEach(function (square) {
  square.addEventListener('click', squareClicked);
});

let plyr = 2;

function squareClicked(e) {
  if (plyr % 2 === 0) {
    e.target.textContent = 'X';
    plyr++;
  } else {
    e.target.textContent = 'O';
    plyr--;
  };
};

    
