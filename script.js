const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
let gameOver = false;

function checkForWin() {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 1].textContent === currentPlayer &&
        squares[i + 2].textContent === currentPlayer) {
      return true;
    }
  }

  // check columns
  for (let i = 0; i < 3; i++) {
    if (squares[i].textContent === currentPlayer &&
        squares[i + 3].textContent === currentPlayer &&
        squares[i + 6].textContent === currentPlayer) {
      return true;
    }
  }

  // check diagonals
  if (squares[0].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[8].textContent === currentPlayer) {
    return true;
  }
  if (squares[2].textContent === currentPlayer &&
      squares[4].textContent === currentPlayer &&
      squares[6].textContent === currentPlayer) {
    return true;
  }

  return false;
}

function checkForDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === '') {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (e) {
    if (!gameOver && e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      if (checkForWin()) {
        alert(currentPlayer + ' wins!');
        gameOver = true;
      } else if (checkForDraw()) {
        alert('Draw!');
        gameOver = true;
        window.location.reload();
      }
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  });
}

// initialize the middle square with a blank space
squares[4].textContent = '';
