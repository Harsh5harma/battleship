/* eslint-disable guard-for-in */
/* eslint-disable require-jsdoc */
const ship = require('./ship');

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

function gameboard() {
  const ships = {};
  const grid1 = grid();

  // abbr of ships
  const nameDict = {
    'carrier': 'ca',
    'battleship': 'ba',
    'cruiser': 'cr',
    'submarine': 'su',
    'destroyer': 'de',
  };
  // marks grid with ship abbrs
  const nameGrid = grid();

  const placeShip = (shipName, x, y)=> {
    const myShip = ship(shipName);
    myShip.setPosition(x, y);
    ships[nameDict[shipName]] = myShip;
    const x1 = x[0];
    const y1 = y[0];

    const x2 = x[1];
    const y2 = y[1];

    for (let i = x1; i<= x2; i++) {
      for (let j=y1; j<= y2; j++) {
        grid1[j][i] = 1;
        nameGrid[j][i] = nameDict[shipName];
      }
    }
  };

  const receiveAttack = (x, y) => {
    if (grid1[y][x] === 1) {
      grid1[y][x] = 'hit';
      ships[nameGrid[y][x]].hit();
    } else if (grid1[y][x]===0) {
      grid1[y][x] = 'miss';
    } else {
      return;
    }
  };
  const displayBoard = ()=> {
    let x = '';
    for (let i = 0; i <10; i++) {
      let temp = '';
      for (let j = 0; j<10; j++) {
        temp+=grid1[i][j]+' ';
      }
      x+=temp + '\n';
    }
    console.log(x);
    return x;
  };

  const allShipsSunk = ()=> {
    if (JSON.stringify(ships) !== JSON.stringify({})) {
      const keys = Object.keys(ships);
      for (let i = 0; i<keys.length; i++) {
        if (ships[keys[i]].isSunk() === false) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    grid1,
    ships,
    nameGrid,
    displayBoard,
  };
};
/*
const xc = [[0, 4], [5, 5], [2, 4], [8, 8], [7, 8]];
const yc = [[1, 1], [3, 6], [7, 7], [6, 8], [2, 2]];
const gb = gameboard();
gb.placeShip('carrier', xc[0], yc[0]);
gb.placeShip('battleship', xc[1], yc[1]);
gb.placeShip('cruiser', xc[2], yc[2]);
gb.placeShip('submarine', xc[3], yc[3]);
gb.placeShip('destroyer', xc[4], yc[4]);
gb.receiveAttack(1, 1);
gb.receiveAttack(0, 1);
gb.receiveAttack(2, 1);
gb.receiveAttack(3, 1);
gb.receiveAttack(4, 1);


gb.displayBoard();
*/
module.exports = gameboard;
