import { container, cell, cellArray } from "./gameBoard.js";

// const cell = document.getElementsByClassName("cell");
// const cellArray = [...cell];
const cells = [];

function createCell() {
  for (let i = 0; i < cellArray.length; i++) {
    let cell = cellArray[i];
    cells.push(cell);
  }
}
createCell();

// function addImgCont(cell) {
//   cell.insertAdjacentHTML(
//     "afterbegin",
//     `<div id='imgCont' style='padding: 50px;'></div>`
//   );
// }

// addImgCont(...cellArray);

// const imgContainers = document.querySelectorAll(".imgCont");
// console.log(imgContainers);

function placePiece(cell, piece) {
  cell.insertAdjacentHTML(
    "afterbegin",
    `<div class='imgCont' style='width: 100px; height: 100px; margin: auto; position: absolute;' draggable='true'>
    <img class='pieces' src='./gamePieces/${piece}.png' id='${piece}' draggable='false'>
    </div>`
  );
  cell.classList.remove("empty");
}

// White Team (Team 1)
placePiece(cells[0], "whiteRook");
placePiece(cells[1], "whiteKnight");
placePiece(cells[2], "whiteBishop");
placePiece(cells[3], "whiteKing");
placePiece(cells[4], "whiteQueen");
placePiece(cells[5], "whiteBishop");
placePiece(cells[6], "whiteKnight");
placePiece(cells[7], "whiteRook");
placePiece(cells[8], "whitePawn");
placePiece(cells[9], "whitePawn");
placePiece(cells[10], "whitePawn");
placePiece(cells[11], "whitePawn");
placePiece(cells[12], "whitePawn");
placePiece(cells[13], "whitePawn");
placePiece(cells[14], "whitePawn");
placePiece(cells[15], "whitePawn");

// Black Team (Team 2)
placePiece(cells[48], "blackPawn");
placePiece(cells[49], "blackPawn");
placePiece(cells[50], "blackPawn");
placePiece(cells[51], "blackPawn");
placePiece(cells[52], "blackPawn");
placePiece(cells[53], "blackPawn");
placePiece(cells[54], "blackPawn");
placePiece(cells[55], "blackPawn");
placePiece(cells[56], "blackRook");
placePiece(cells[57], "blackKnight");
placePiece(cells[58], "blackBishop");
placePiece(cells[59], "blackKing");
placePiece(cells[60], "blackQueen");
placePiece(cells[61], "blackBishop");
placePiece(cells[62], "blackKnight");
placePiece(cells[63], "blackRook");
