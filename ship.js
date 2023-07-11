// eslint-disable-next-line require-jsdoc
function ship(sType, sHits=0) {
  const type = sType;
  let health;
  let size;
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

  const hit = ()=> {
    if (health > 0) {
      hits++;
      health--;
    }
    return health;
  };

  const isSunk = ()=> {
    if (size-hits === 0) {
      return true;
    } else {
      return false;
    }
  };
  return {
    hit,
    isSunk,
    hits,
  };
}

module.exports = ship;

