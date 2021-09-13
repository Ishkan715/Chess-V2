// 06/22/21

import { container, cell, cellArray } from "./gameBoard.js";
import {
  A1,
  B1,
  C1,
  D1,
  E1,
  F1,
  G1,
  H1,
  A2,
  B2,
  C2,
  D2,
  E2,
  F2,
  G2,
  H2,
  A3,
  B3,
  C3,
  D3,
  E3,
  F3,
  G3,
  H3,
  A4,
  B4,
  C4,
  D4,
  E4,
  F4,
  G4,
  H4,
  A5,
  B5,
  C5,
  D5,
  E5,
  F5,
  G5,
  H5,
  A6,
  B6,
  C6,
  D6,
  E6,
  F6,
  G6,
  H6,
  A7,
  B7,
  C7,
  D7,
  E7,
  F7,
  G7,
  H7,
  A8,
  B8,
  C8,
  D8,
  E8,
  F8,
  G8,
  H8,
} from "./position.js";

const draggablePieces = document.querySelectorAll(".imgCont");
const cellElement = document.querySelectorAll(".cell");
const image = document.querySelector("img");

// Drag and Drop Method

// draggablePieces.forEach((piece) => {
//   piece.addEventListener("dragenter", () => {
//     piece.classList.add("dragging");
//     piece.parentNode.classList.add("empty");
//   });

//   piece.addEventListener("drop", (e) => {
//     e.preventDefault();
//     const imgcont = e.path[0];

//     imgcont.classList.remove("dragging");
//     e.target.parentNode.classList.remove("empty");
//   });
// });

// cellElement.forEach((container) => {
//   container.addEventListener("dragover", (e) => {
//     // e.preventDefault();
//     // console.log(e.currentTarget);
//     // console.log(e.target);
//     const draggable = document.querySelector(".dragging");
//     container.appendChild(draggable);
//     // console.log(e.currentTarget);
//     if (!e.currentTarget.classList.contains("empty")) {
//       console.log("test");
//     }
//   });
// });

// Click and Move Method

// draggablePieces.forEach((container) => {
//   container.addEventListener("click", function (e) {
//     const piece = e.target;
//     const oldParent = piece.parentNode;
//   });
// });

function addFilled() {
  draggablePieces.forEach((piece) => {
    piece.parentElement.classList.add("filled");
  });
}
addFilled();

const emptyCells = document.querySelectorAll(".empty");
const filledCells = document.querySelectorAll(".filled");
const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");
const nextBtn = document.querySelector(".nextBtn");

let activePlayer = 0;

function clickPiece() {
  let clickedEv = false;
  if (clickedEv != true) {
    addFilled();
    container.addEventListener("click", function (event) {
      // container.onclick = (event) => {
      const piece = event.target;
      console.log(piece);
      // const pieceCell = piece.parentNode;
      const currCell = piece.parentNode;
      console.log(currCell);

      // Remove highlight when selecting different piece
      filledCells.forEach((cell) => {
        cell.classList.remove("imgContHover");
      });

      // Add highlight to selected piece
      piece.classList.add("imgContHover");
      // const targetCell = event.target;
      // console.log(targetCell);

      emptyCells.forEach((cell) => {
        // console.log(cell);
        // Highlight target cell to move piece
        const currColor = cell.style.backgroundColor;

        // MouseHover
        cell.addEventListener("mouseover", function (e) {
          // console.log(e.target);
          // Change color of empty cell for target
          e.target.style.backgroundColor = "orange";

          // if (e.target.style.backgroundColor == "orange") {
          //   e.target.style.backgroundColor = currColor;
          // }

          // Remove highlight if current piece and add piece to new cell
          cell.addEventListener("click", function (ev) {
            e.preventDefault();
            console.log(ev.target);

            ev.target.classList.remove("empty");
            currCell.classList.remove("filled");

            // console.log(currentPiece);
            piece.classList.remove("imgContHover");

            // targetCell.style.backgroundColor = currColor;

            piece.classList.remove("cellHover");

            e.target.classList.add("filled");
            e.target.classList.remove("imgContHover");

            if (!e.target.hasChildNodes()) {
              if (currCell != piece) {
                piece.parentNode.classList.add("empty");
                // console.log(currentPiece.parentNode);
                e.target.appendChild(piece);
              }
            }
            // console.log(ev.target);
            // // console.log(currCell);
            // ev.target.classList.toggle("filled");
            // console.log(ev.target);

            // emptyCells.forEach((cell) => {
            //   cell.classList.add("stopHover");
            //   cell.classList.remove("empty");
            // });
          });

          // targetCell.style.backgroundColor = currColor;
          // Change color of empty cell back when mouse no longer over cell
        });

        cell.style.backgroundColor = currColor;
      });

      piece.classList.remove("filled");
    });
    clickedEv = true;
  } else return;
  // cellArray.forEach((cell) => {
  //   cell.classList.remove("stopHover");
  // });
}

emptyCells.forEach((cell) => {
  const currColor = cell.style.backgroundColor;
  cell.addEventListener("mouseout", function (e) {
    e.preventDefault();
    // console.log(e.target);
    const tarCell = e.target;
    tarCell.style.backgroundColor = currColor;
    tarCell.classList.remove("imgContHover");
  });
});

function movePiece() {
  filledCells.forEach((piece) => {
    piece.addEventListener("click", clickPiece);
  });
  filledCells.forEach((piece) => {
    piece.removeEventListener("reset", clickPiece);
  });
}

// container.addEventListener("click", movePiece());
movePiece();

// /// Test ///

// filledCells.forEach((piece) => {
//   piece.addEventListener("mousedown", mouseDown, false);
//   window.addEventListener("mouseup", mouseUp, false);

//   function mouseUp() {
//     window.removeEventListener("mousemove", move, true);
//   }

//   function mouseDown(e) {
//     window.addEventListener("mousemove", move, true);
//     console.log(e.target);
//   }

//   function move(e) {
//     piece.style.top = e.clientY + "px";
//     piece.style.left = e.clientX + "px";
//   }
// });
