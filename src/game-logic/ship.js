// eslint-disable-next-line require-jsdoc
function ship(sType, sHits=0) {
  const type = sType;
  let health;
  let size;
  let x = [];
  let y = [];
  let hits = sHits;

  if (type === 'carrier') {
    size = health = 5;
  } else if (type === 'battleship') {
    size = health = 4;
  } else if (type === 'cruiser') {
    size = health = 3;
  } else if (type === 'submarine') {
    size = health = 3;
  } else if (type === 'destroyer') {
    size = health = 2;
  }

  const setPosition= (c1, c2)=>{
    x = c1;
    y = c2;
  };

  const getPosition = ()=> {
    return [x, y];
  };

  const hit = ()=> {
    if (health > 0) {
      hits++;
      health--;
    }
    return health;
  };
  const getHits = ()=> {
    return hits;
  };

  const isSunk = ()=> {
    if (size-hits === 0) {
      return true;
    } else {
      return false;
    }
  };
  return {
    type,
    getHits,
    isSunk,
    hit,
    getPosition,
    setPosition,
  };
}
module.exports = ship;
