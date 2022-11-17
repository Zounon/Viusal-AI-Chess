// import { Chess } from 'chess.js'

// const chess = new Chess()

// while (!chess.game_over()) {
//   const moves = chess.moves()
//   const move = move[0]
//   chess.move(move)
// }

// console.log(chess.pgn())



var config = {
  draggable: true,
  position: 'start',
  // onChange: onChange,
  onDrop: onDrop
  }

Document.getElem
const boardDiv = document.getElementById('myBoard')
var board = Chessboard(boardDiv, config)
// var board = Chessboard('myBoard', config)

// function writeMovesToConsole(startPos, endPos, piece) {
//   console.log(board.Chessboard.)
// }

// Taken from https://chessboardjs.com/examples#4000
function onChange (oldPos, newPos) {
  console.log('Position changed:')
  console.log('Old position: ' + Chessboard.objToFen(oldPos))
  console.log('New position: ' + Chessboard.objToFen(newPos))
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}

// Taken from https://chessboardjs.com/examples#4004
function onDrop (source, target, piece, newPos, oldPos, orientation) {
  console.log('Source: ' + source)
  console.log('Target: ' + target)
  console.log('Piece: ' + piece)
  console.log('New position: ' + Chessboard.objToFen(newPos))
  console.log('Old position: ' + Chessboard.objToFen(oldPos))
  console.log('Orientation: ' + orientation)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  nPos = Chessboard.objToFen(newPos) 
  $.post("/write_pos_to_flask", {
     nPos:Chessboard.objToFen(newPos)
  })
  $.post("/send-move-from-to")
    moveFrom:Chessboard.objToFen(oldPos)
    moveTO:Chessboard.objToFen(newPos)
}

