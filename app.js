let squares = document.querySelectorAll('.row > div');

squares.forEach(function(square) {
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

