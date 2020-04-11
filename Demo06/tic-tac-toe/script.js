// constants
const STARTED = 0
const ENDED = 1

// HTML elements
const playerSpan = document.getElementById('player')
const gameTable = document.getElementById('game')

const game = {
  state: STARTED,
  turn: 'X',
  move: 0
}

function endGame(winner) {
    if (winner) {
        alert('Game Over | Winner = ' + winner)
    } else {
        alert('Game Over | Draw')
    }
    game.state = ENDED
}

function restartGame() {
    if (Math.random() > 0.5) game.turn = 'O'
    else game.turn = 'X'

    game.state = STARTED
    game.move = 0

    Array.from(document.getElementsByTagName('td')).forEach(cell => {
        cell.textContent = ''
    })
}

function nextTurn() {
    if (game.state === ENDED) return
    
    game.move++
    if (game.turn === 'X') game.turn = 'O'
    else game.turn = 'X'

    if (game.move == 9) {
        endGame()
    }

    playerSpan.textContent = game.turn
}

function isSeqCaptured(arrayOf3Cells) {
    let winnningCombo = game.turn + game.turn + game.turn
    if (arrayOf3Cells.map(i => i.textContent).join('') === winnningCombo) {
        endGame(game.turn)
    }
}

function isRowCaptured(row) {
    let tableRow = Array.from(gameTable.children[0].children[row - 1].children)
    isSeqCaptured(tableRow)
}
function isColCaptured(col) {
    let tableCol = [
        gameTable.children[0].children[0].children[col - 1],
        gameTable.children[0].children[1].children[col - 1],
        gameTable.children[0].children[2].children[col - 1]
    ]
    isSeqCaptured(tableCol)
}
function isDiagCaptured(row, col) {
    if (row !== col && (row + col) !== 4) return
    let diag1 = [
        gameTable.children[0].children[0].children[0],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[2]
    ]
    let diag2 = [
        gameTable.children[0].children[0].children[2],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[0]
    ]
    isSeqCaptured(diag1)
    isSeqCaptured(diag2)


}


function boxClicked(row, col) {
  if (game.state === ENDED) {
    alert('Game Ended | Restart to Play Again')
    return
  }
  console.log('box clicked = ', row, col)

  let clickedBox = gameTable.children[0].children[row - 1].children[col - 1]
  clickedBox.textContent = game.turn
  isRowCaptured(row)
  isColCaptured(col)
  isDiagCaptured(row, col)

  nextTurn()
}
