import Zombie from '../Zombie';

test('check Zombie is created', () => {
  const newZb = new Zombie('gamer', 'Zombie');
  expect(newZb).toEqual(
    {
      name: 'gamer',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});

test('check Zombie func levelUp', () => {
  const newZb = new Zombie('gamer', 'Zombie');
  newZb.levelUp();
  expect(newZb).toEqual(
    {
      name: 'gamer',
      type: 'Zombie',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    },
  );
});

test('check Zombie  func damage', () => {
  const newZb = new Zombie('gamer', 'Zombie');
  newZb.damage(30);
  expect(newZb.health).toBe(73);
});

test('check Zombie error damage', () => {
  expect(() => {
    const newZb = new Zombie('gamer', 'Zombie');
    newZb.health = -1;
    newZb.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});

test('check Zombie error levelUp', () => {
  expect(() => {
    const newZb = new Zombie('gamer', 'Zombie');
    newZb.health = 0;
    newZb.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('check Zombie error name', () => {
  expect(() => {
    const newZb = new Zombie('p', 'Zombie');
    newZb.name = 'p';
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Zombie error type', () => {
  expect(() => {
    const newZb = new Zombie('Gamer', 'Mag');
    newZb.type = 'Mag';
  }).toThrowError('Неверный тип игрока');
});
