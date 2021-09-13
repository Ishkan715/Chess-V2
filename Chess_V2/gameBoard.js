export const container = document.getElementById("container");

// Create cells
let n = 8,
  i = -1,
  j = 0,
  s = "";

while (++i < n) {
  s += `<div class="row" id='row${i}'>`;
  for (j = 0; j < n; j++) s += `<div class="cell empty"></div>`;
  s += "</div>";
}

container.innerHTML = s;

// Array for cells
export const cell = document.getElementsByClassName("cell");
export const cellArray = [...cell];

// console.log(cellArray);

cellArray.forEach((el) =>
  el.setAttribute("id", `cell${cellArray.indexOf(el) + 1}`)
);

// Select rows
const row1 = cellArray.slice(0, 8);
const row2 = cellArray.slice(8, 16);
const row3 = cellArray.slice(16, 24);
const row4 = cellArray.slice(24, 32);
const row5 = cellArray.slice(32, 40);
const row6 = cellArray.slice(40, 48);
const row7 = cellArray.slice(48, 56);
const row8 = cellArray.slice(56, 64);

// Select row elements
export const row1El = document.getElementById("row0");
export const row2El = document.getElementById("row1");
export const row3El = document.getElementById("row2");
export const row4El = document.getElementById("row3");
export const row5El = document.getElementById("row4");
export const row6El = document.getElementById("row5");
export const row7El = document.getElementById("row6");
export const row8El = document.getElementById("row7");

// Create Columns
export const column1 = [
  cellArray[0],
  cellArray[8],
  cellArray[16],
  cellArray[24],
  cellArray[32],
  cellArray[40],
  cellArray[48],
  cellArray[56],
];
export const column2 = [
  cellArray[1],
  cellArray[9],
  cellArray[17],
  cellArray[25],
  cellArray[33],
  cellArray[41],
  cellArray[49],
  cellArray[57],
];
export const column3 = [
  cellArray[2],
  cellArray[10],
  cellArray[18],
  cellArray[26],
  cellArray[34],
  cellArray[42],
  cellArray[50],
  cellArray[58],
];
export const column4 = [
  cellArray[3],
  cellArray[11],
  cellArray[19],
  cellArray[27],
  cellArray[35],
  cellArray[43],
  cellArray[51],
  cellArray[59],
];
export const column5 = [
  cellArray[4],
  cellArray[12],
  cellArray[20],
  cellArray[28],
  cellArray[36],
  cellArray[44],
  cellArray[52],
  cellArray[60],
];
export const column6 = [
  cellArray[5],
  cellArray[13],
  cellArray[21],
  cellArray[29],
  cellArray[37],
  cellArray[45],
  cellArray[53],
  cellArray[61],
];
export const column7 = [
  cellArray[6],
  cellArray[14],
  cellArray[22],
  cellArray[30],
  cellArray[38],
  cellArray[46],
  cellArray[54],
  cellArray[62],
];
export const column8 = [
  cellArray[7],
  cellArray[15],
  cellArray[23],
  cellArray[31],
  cellArray[39],
  cellArray[47],
  cellArray[55],
  cellArray[63],
];

// Add color to tiles
function tiles(row) {
  row.forEach((el, index) => {
    if (index % 2 != 0) {
      el.style.backgroundColor = "grey";
    } else {
      el.style.backgroundColor = "white";
    }
  });
}

function tiles2(row) {
  row.forEach((el, index) => {
    if (index % 2 == 0) {
      el.style.backgroundColor = "grey";
    } else {
      el.style.backgroundColor = "white";
    }
  });
}

tiles(row1);
tiles2(row2);
tiles(row3);
tiles2(row4);
tiles(row5);
tiles2(row6);
tiles(row7);
tiles2(row8);
