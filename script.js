const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (e) {
    if (e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  });
}
