import Magician from '../Magician';

test('check Magician is created', () => {
  const newMg = new Magician('gamer', 'Zombie');
  expect(newMg).toEqual(
    {
      name: 'gamer',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Magician func levelUp', () => {
  const newMg = new Magician('gamer', 'Magician');
  newMg.levelUp();
  expect(newMg).toEqual(
    {
      name: 'gamer',
      type: 'Magician',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    },
  );
});

test('check Magician  func damage', () => {
  const newMg = new Magician('gamer', 'Magician');
  newMg.damage(30);
  expect(newMg.health).toBe(82);
});

test('check Magician error damage', () => {
  expect(() => {
    const newMg = new Magician('gamer', 'Magician');
    newMg.health = -1;
    newMg.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});

test('check Magician error levelUp', () => {
  expect(() => {
    const newMg = new Magician('gamer', 'Magician');
    newMg.health = 0;
    newMg.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('check Magician error name', () => {
  expect(() => {
    const newMg = new Magician('p', 'Magician');
    newMg.name = 'p';
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Magician error type', () => {
  expect(() => {
    const newMg = new Magician('Gamer', 'Mag');
    newMg.type = 'Mag';
  }).toThrowError('Неверный тип игрока');
});
