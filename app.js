let squares = document.querySelectorAll('.row > div');


squares.forEach(function(square) {
  square.addEventListener('click', squareClicked);
});

function squareClicked(e) {
  e.target.textContent = 'X';
}