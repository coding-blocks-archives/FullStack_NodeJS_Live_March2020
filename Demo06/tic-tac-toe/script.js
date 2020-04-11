// constants
const STARTED = 0
const ENDED = 1

// HTML elements
const playerSpan = document.getElementById('player')
const gameTable = document.getElementById('game')

const game = {
  state: STARTED,
  turn: 'X',
}

function nextTurn() {
    if (game.turn === 'X') game.turn = 'O'
    else game.turn = 'X'

    playerSpan.textContent = game.turn
}

function boxClicked(row, col) {
  console.log('box clicked = ', row, col)


  nextTurn()
}
