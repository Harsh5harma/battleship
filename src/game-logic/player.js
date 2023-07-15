/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const gameboard = require('./gameboard');
function grid() {
  const board = [];
  for (let i = 0; i<10; i++) {
    const temp = [];
    for (let j = 0; j<10; j++) {
      temp.push(0);
    }
    board.push(temp);
  }
  return board;
}

function player(playerName) {
  const player = playerName;
  const pBoard = gameboard();
  const dist = grid();


  function randomAttack() {
    let x; let y;
    let i = 100;
    while (i--) {
      x = Math.floor(Math.random()*10);
      y = Math.floor(Math.random()*10);
      if (dist[x][y]===0) {
        dist[x][y]++;
        break;
      } else {
        continue;
      }
    }
    return [x, y];
  };

  /* function playGame() {
    while ((!pBoard.allShipsSunk() || !p2Board.allShipsSunk())) {
      if (turn) {
        p2Board.receiveAttack(...randomAttack());
        turn = false;
      } else {
        pBoard.receiveAttack(...randomAttack());
        turn = true;
      }
    }
  };
*/
  function getDist() {
    let x = '';
    for (let i = 0; i <10; i++) {
      let temp = '';
      for (let j = 0; j<10; j++) {
        temp+=dist[i][j]+' ';
      }
      x+=temp + '\n';
    }
    console.log(x);
    return x;
  }
  return {
    pBoard,
    randomAttack,
    getDist,
  };
}

/*
const xc = [[0, 4], [5, 5], [2, 4], [8, 8], [7, 8]];
const yc = [[1, 1], [3, 6], [7, 7], [6, 8], [2, 2]];
const player1 = player();
player1.pBoard.placeShip('carrier', xc[0], yc[0]);
player1.p1Board.placeShip('battleship', xc[1], yc[1]);
player1.p1Board.placeShip('cruiser', xc[2], yc[2]);
player1.p1Board.placeShip('submarine', xc[3], yc[3]);
player1.p1Board.placeShip('destroyer', xc[4], yc[4]);

player1.p2Board.placeShip('carrier', xc[0], yc[0]);
player1.p2Board.placeShip('battleship', xc[1], yc[1]);
player1.p2Board.placeShip('cruiser', xc[2], yc[2]);
player1.p2Board.placeShip('submarine', xc[3], yc[3]);
player1.p2Board.placeShip('destroyer', xc[4], yc[4]);
player1.p2Board.displayBoard();
player1.playGame();
player1.getDist();
*/

module.exports = player;
