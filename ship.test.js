const ship = require('./ship');


describe('checking for hits', ()=>{
  test('carrier hit', ()=> {
    expect(ship('carrier').hit()).toEqual(4);
  });
  test('battleship hit', ()=> {
    expect(ship('battleship').hit()).toEqual(3);
  });
  test('cruiser hit', ()=>{
    expect(ship('cruiser').hit()).toEqual(2);
  });
  test('submarine hit', ()=> {
    expect(ship('submarine').hit()).toEqual(2);
  });
  test('destroyer hit', ()=> {
    expect(ship('destroyer').hit()).toEqual(1);
  });
});


describe('sinking ships', ()=> {
  test('carrier sunk', ()=> {
    expect(ship('carrier', 5).isSunk()).toEqual(true);
  });
  test('battleship sunk', ()=> {
    expect(ship('battleship', 4).isSunk()).toEqual(true);
  });
  test('cruiser sunk', ()=> {
    expect(ship('cruiser', 3).isSunk()).toEqual(true);
  });
  test('submarine sunk', ()=> {
    expect(ship('submarine', 3).isSunk()).toEqual(true);
  });
  test('destroyer sunk', ()=> {
    expect(ship('destroyer', 2).isSunk()).toEqual(true);
  });

  test('carrier not sunk', ()=> {
    expect(ship('carrier', 4).isSunk()).toEqual(false);
  });
  test('battleship not sunk', ()=> {
    expect(ship('battleship', 3).isSunk()).toEqual(false);
  });
  test('cruiser not sunk', ()=> {
    expect(ship('cruiser', 2).isSunk()).toEqual(false);
  });
  test('submarine not sunk', ()=> {
    expect(ship('submarine', 2).isSunk()).toEqual(false);
  });
  test('destroyer not sunk', ()=> {
    expect(ship('destroyer', 1).isSunk()).toEqual(false);
  });
});
