const gameboard = require('../game-logic/gameboard');

const gb1 = gameboard();
const gb2 = gameboard();
const gb3 = gameboard();

const xc = [[0, 4], [5, 5], [2, 4], [8, 8], [7, 8]];
const yc = [[1, 1], [3, 6], [7, 7], [6, 8], [2, 2]];

const board =
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

];

const board2 =
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 'hit', 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const board3 =
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['hit', 'hit', 'hit', 'hit', 'hit', 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 'hit', 'hit', 0],
  [0, 0, 0, 0, 0, 'hit', 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'hit', 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'hit', 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 'hit', 0, 0, 'hit', 0],
  [0, 0, 'hit', 'hit', 'hit', 0, 0, 0, 'hit', 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 'hit', 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

describe('can the ships be placed', ()=>{
  gb1.placeShip('carrier', xc[0], yc[0]);
  gb1.placeShip('battleship', xc[1], yc[1]);
  gb1.placeShip('cruiser', xc[2], yc[2]);
  gb1.placeShip('submarine', xc[3], yc[3]);
  gb1.placeShip('destroyer', xc[4], yc[4]);
  test('checking for all ships at once', ()=> {
    const tempboard = gb1.grid1;
    expect(tempboard).toStrictEqual(board);
  });
});

describe('can the ships be attacked', ()=> {
  gb2.placeShip('carrier', xc[0], yc[0]);
  gb2.placeShip('battleship', xc[1], yc[1]);
  gb2.placeShip('cruiser', xc[2], yc[2]);
  gb2.placeShip('submarine', xc[3], yc[3]);
  gb2.placeShip('destroyer', xc[4], yc[4]);
  gb2.receiveAttack(1, 1);
  test('attacked carrier', ()=>{
    expect(gb2.grid1).toStrictEqual(board2);
  });
});

describe('can all ships be sunk', ()=> {
  gb3.placeShip('carrier', xc[0], yc[0]);
  gb3.placeShip('battleship', xc[1], yc[1]);
  gb3.placeShip('cruiser', xc[2], yc[2]);
  gb3.placeShip('submarine', xc[3], yc[3]);
  gb3.placeShip('destroyer', xc[4], yc[4]);

  gb3.receiveAttack(0, 1);
  gb3.receiveAttack(1, 1);
  gb3.receiveAttack(2, 1);
  gb3.receiveAttack(3, 1);
  gb3.receiveAttack(4, 1);
  gb3.receiveAttack(5, 3);
  gb3.receiveAttack(5, 4);
  gb3.receiveAttack(5, 5);
  gb3.receiveAttack(5, 6);
  gb3.receiveAttack(2, 7);
  gb3.receiveAttack(3, 7);
  gb3.receiveAttack(4, 7);
  gb3.receiveAttack(8, 6);
  gb3.receiveAttack(8, 7);
  gb3.receiveAttack(8, 8);
  gb3.receiveAttack(7, 2);
  gb3.receiveAttack(8, 2);

  test('has the ship sunk', ()=>{
    // expect(gb3.grid1).toStrictEqual(board3);
    expect(gb3.allShipsSunk()).toBe(true);
  });
});

