let players = ["X", "O"];
let activePlayer = 0;
let board;
let dataX = [];
let dataO = [];
let stepCount = 0;
let winPos = [
  ["0", "0", "1", "1", "2", "2"],
  ["0", "2", "1", "1", "2", "0"],
  ["0", "0", "0", "1", "0", "2"],
  ["1", "0", "1", "1", "1", "2"],
  ["2", "0", "2", "1", "2", "2"],
  ["0", "0", "1", "0", "2", "0"],
  ["0", "1", "1", "1", "2", "1"],
  ["0", "2", "1", "2", "2", "2"]
];
  
activePlayer = players[Math.floor(Math.random() * 2)];
console.log("Первым ходит: '" + activePlayer + "'");

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]; 

  renderBoard(board);
  stepCount = 0;
}
 
function click(row, column) {
  activePlayer === "X" ? (activePlayer = "O") : (activePlayer = "X");
  board[row][column] = activePlayer;
  renderBoard(board);
  stepCount++;

  if (stepCount === 9 && !winnerPlayers()) {
    alert("Ничья");
  }

  if (activePlayer === players[0]) {
    dataX.push(row);
    dataX.push(column);
  } else {
    dataO.push(row);
    dataO.push(column);
  }
 
  if (winnerPlayers(activePlayer)) {
    showWinner(activePlayer);
  } 
  
  console.log(dataX);
  console.log(dataO);
}
 
function winnerPlayers() {
  for (let i = 0; i < winPos.length; i++) {
    const winArr = winPos[i];
    const pos = [];
    for (let j = 0; j < winArr.length; j++) {
      if (j % 2) {
        const y = winArr[j],
          x = winArr[j - 1];
        pos.push(board[y][x]);
      }
    }
    if (pos[0] == pos[1] && pos[1] == pos[2] && pos[2] !== "") {
      return pos;
    }
  }
  return null;
}