import Undead from '../Undead';

test('check Undead error name', () => {
  expect(() => {
    const newUd = new Undead('p', 'Boweman');
    newUd.name = 'p';
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Undead error type', () => {
  expect(() => {
    const newUd = new Undead('Gamer', 'Mag');
    newUd.type = 'Mag';
  }).toThrowError('Неверный тип игрока');
});

test('check Undead is created', () => {
  const newUd = new Undead('gamer', 'Zombie');
  expect(newUd).toEqual(
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

test('check Undead func levelUp', () => {
  const newUd = new Undead('gamer', 'Undead');
  newUd.levelUp();
  expect(newUd).toEqual(
    {
      name: 'gamer',
      type: 'Undead',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    },
  );
});

test('check Undead  func damage', () => {
  const newUd = new Undead('gamer', 'Undead');
  newUd.damage(30);
  expect(newUd.health).toBe(77.5);
});

test('check Undead error damage', () => {
  expect(() => {
    const newUd = new Undead('gamer', 'Undead');
    newUd.health = -1;
    newUd.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});

test('check Undead error levelUp', () => {
  expect(() => {
    const newUd = new Undead('gamer', 'Undead');
    newUd.health = 0;
    newUd.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
