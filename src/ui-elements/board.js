/* eslint-disable require-jsdoc */
import grid from './numberedGrid';

export default function(num='0', pname='defaultPlayer') {
  const board = document.createElement('div');
  board.classList.add('board', `board${num}`);
  const pName = document.createElement('div');
  pName.classList.add('pName');
  pName.textContent = pname;
  const pgrid = grid();
  pgrid.classList.add('pgrid');

  const pStatus = document.createElement('div');
  pStatus.classList.add('pStatus');
  pStatus.textContent = 'placeholder';

  board.append(pName, pgrid, pStatus);
  return board;
}
