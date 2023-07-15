import setupForm from './ui-elements/SetupForm.js';
import gameboard from './ui-elements/playerBoard.js';
import './style.css';
const loadPage = (()=> {
  const body = document.querySelector('body');
  const header = document.createElement('div');
  header.className = 'header';
  header.textContent = 'Battleship';
  const main = document.createElement('div');
  main.className = 'main';
  const placementForm = setupForm();
  placementForm.classList.add('placementForm');
  placementForm.classList.toggle('active');
  body.appendChild(header);
  main.appendChild(placementForm);
  body.appendChild(main);
  const startBtn = document.querySelector('.placeBtn');
  startBtn.addEventListener('click', ()=> {
    const temp = gameboard('Harsh', 'AI');
    temp.classList.add('temp');
    main.replaceChild(temp, placementForm);
  });
})();


