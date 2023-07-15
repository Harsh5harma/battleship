/* eslint-disable require-jsdoc */
import grid from './numberedGrid';

export default function nameAndBoard() {
  const fcontainer = document.createElement('div');
  fcontainer.classList.add('fcontainer');

  // 1
  const sContainer = document.createElement('div');
  sContainer.classList.add('sContainer');

  // 1.1
  const nameParent = document.createElement('div');
  nameParent.classList.add('nameParent');
  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = 'Player Name: ';
  const nameInput = document.createElement('input');
  nameInput.classList.add('nameInput');

  nameInput.type = 'text';
  nameInput.maxLength = 10;
  nameInput.placeholder = 'Name';
  nameInput.default = 'Player 1';
  nameParent.append(name, nameInput);

  // 1.2
  const placementGrid = grid();
  placementGrid.classList.add('placementGrid');

  // 1.3
  const infoTextParent = document.createElement('div');
  infoTextParent.classList.add('infoTextParent');
  const whatShip = document.createElement('div');
  whatShip.classList.add('whatShip');
  const whatLength = document.createElement('div');
  whatLength.classList.add('whatLength');
  whatShip.textContent = 'Place Carrier!';
  whatLength.textContent = 'Length: 5';
  infoTextParent.append(whatShip, whatLength);

  sContainer.append(nameParent, placementGrid, infoTextParent);

  // 2
  const cContainer = document.createElement('div');
  cContainer.classList.add('cContainer');

  // 2.1
  const cTitle = document.createElement('div');
  cTitle.classList.add('cTitle');
  cTitle.textContent = 'Coordinates';

  // 2.2
  const posContainer = document.createElement('div');
  posContainer.classList.add('posContainer');

  const x1Text = document.createElement('div');
  x1Text.textContent = 'X1:';
  x1Text.classList.add('coordtxt', 'x1Text');
  const x1 = document.createElement('input');
  x1.classList.add('coordinput', 'x1');
  x1.type = 'number';
  x1.maxLength = 2;
  x1.max = 10;
  x1.min = 1;
  x1.placeholder = 'X1';

  const x2Text = document.createElement('div');
  x2Text.textContent = 'X2:';
  x2Text.classList.add('coordtxt', 'x2Text');
  const x2 = document.createElement('input');
  x2.classList.add('coordinput', 'x2');
  x2.type = 'number';
  x2.maxLength = 2;
  x2.max = 10;
  x2.min = 1;
  x2.placeholder = 'X2';

  const y1Text = document.createElement('div');
  y1Text.textContent = 'Y1:';
  y1Text.classList.add('coordtxt', 'y1Text');
  const y1 = document.createElement('input');
  y1.classList.add('coordinput', 'y1');
  y1.type = 'number';
  y1.maxLength = 2;
  y1.max = 10;
  y1.min = 1;
  y1.placeholder = 'Y1:';

  const y2Text = document.createElement('div');
  y2Text.textContent = 'Y2:';
  y2Text.classList.add('coordtxt', 'y2Text');
  const y2 = document.createElement('input');
  y2.classList.add('coordinput', 'y2');
  y2.type = 'number';
  y2.maxLength = 2;
  y2.max = 10;
  y2.min = 1;
  y2.placeholder = 'Y2';

  posContainer.append(x1Text, x1, x2Text, x2, y1Text, y1, y2Text, y2);

  // 3
  const placeBtn = document.createElement('button');
  placeBtn.classList.add('placeBtn');
  placeBtn.type = 'number';
  placeBtn.textContent = 'Place';

  cContainer.append(cTitle, posContainer, placeBtn);
  fcontainer.append(sContainer, cContainer);

  return fcontainer;
};

