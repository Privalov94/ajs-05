import Boweman from '../Boweman';

test('check Boweman error name', () => {
  expect(() => {
    const newBw = new Boweman('p', 'Boweman');
    newBw.name = 'p';
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Boweman error type', () => {
  expect(() => {
    const newBw = new Boweman('Gamer', 'Mag');
    newBw.type = 'Mag';
  }).toThrowError('Неверный тип игрока');
});

test('check boweman is created', () => {
  const newBw = new Boweman('gamer', 'Zombie');
  expect(newBw).toEqual(
    {
      name: 'gamer',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check boweman func levelUp', () => {
  const newBw = new Boweman('gamer', 'Boweman');
  newBw.levelUp();
  expect(newBw).toEqual(
    {
      name: 'gamer',
      type: 'Boweman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    },
  );
});

test('check Boweman  func damage', () => {
  const newBw = new Boweman('gamer', 'Boweman');
  newBw.damage(30);
  expect(newBw.health).toBe(77.5);
});

test('check Boweman error damage', () => {
  expect(() => {
    const newBw = new Boweman('gamer', 'Boweman');
    newBw.health = -1;
    newBw.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});

test('check Boweman error levelUp', () => {
  expect(() => {
    const newBw = new Boweman('gamer', 'Boweman');
    newBw.health = 0;
    newBw.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
