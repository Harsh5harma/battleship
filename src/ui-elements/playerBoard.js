/* eslint-disable require-jsdoc */
import board from './board';

export default function playerBoard(player1='', player2 = '') {
  const papadiv = document.createElement('div');
  papadiv.classList.add('papadiv');
  const minipapadiv = document.createElement('div');
  minipapadiv.classList.add('minipapadiv');
  const temp = board(1, player1);
  const temp2 = board(2, 'AI');
  minipapadiv.append(temp, temp2);

  const moveStatus = document.createElement('div');
  moveStatus.classList.add('moveStatus');
  moveStatus.textContent = 'some text here';
  papadiv.append(minipapadiv, moveStatus);
  return papadiv;
};
