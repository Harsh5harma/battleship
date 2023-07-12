const player = require('./player');


const player1 = player();

const xc = [[0, 4], [5, 5], [2, 4], [8, 8], [7, 8]];
const yc = [[1, 1], [3, 6], [7, 7], [6, 8], [2, 2]];

const board1 =
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

/* describe('if game loop works till one of the player looses', ()=> {
  player1.p1Board.placeShip('carrier', xc[0], yc[0]);
  player1.p1Board.placeShip('battleship', xc[1], yc[1]);
  player1.p1Board.placeShip('cruiser', xc[2], yc[2]);
  player1.p1Board.placeShip('submarine', xc[3], yc[3]);
  player1.p1Board.placeShip('destroyer', xc[4], yc[4]);

  player1.p2Board.placeShip('carrier', xc[0], yc[0]);
  player1.p2Board.placeShip('battleship', xc[1], yc[1]);
  player1.p2Board.placeShip('cruiser', xc[2], yc[2]);
  player1.p2Board.placeShip('submarine', xc[3], yc[3]);
  player1.p2Board.placeShip('destroyer', xc[4], yc[4]);


  test('if board changed', ()=> {
    player1.p2Board.displayBoard();
    player1.playGame();
    // player1.getDist();
    player1.p2Board.displayBoard();
    player1.p1Board.displayBoard();
    expect(player1.p1Board).not.toEqual(board1);
    expect(player1.p2Board).not.toEqual(board2);
  });
});
*/
