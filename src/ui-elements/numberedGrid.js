/* eslint-disable max-len */
const gridGenerator = ()=> {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('gridContainer');
  const gridColMarks = document.createElement('div');
  gridColMarks.classList.add('gridColMarks');
  const gridSubDiv = document.createElement('div');
  gridSubDiv.classList.add('gridSubDiv');
  const gridRowMarks = document.createElement('div');
  gridRowMarks.classList.add('gridRowMarks');
  const grid = document.createElement('div');
  grid.classList.add('grid');
  gridSubDiv.append(gridRowMarks, grid);
  gridContainer.append(gridColMarks, gridSubDiv);

  // edge cases are 0,0 and 9,9
  for (let col = 0; col<10; col++ ) {
    for (let row = 0; row<10; row++) {
      const temp = document.createElement('div');
      temp.classList.add('gridElement', String(col), String(row));
      grid.append(temp);
    }
  };
  for (let col = 0; col<10; col++ ) {
    const temp = document.createElement('div');
    temp.classList.add('colNumbering');
    temp.textContent = String(col+1);
    gridColMarks.append(temp);
  };

  for (let row = 0; row<10; row++) {
    const temp = document.createElement('div');
    temp.classList.add('rowNumbering');
    temp.textContent = String(row+1);
    gridRowMarks.append(temp);
  }
  return gridContainer;
};

module.exports = gridGenerator;
