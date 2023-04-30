import Swordsman from '../Swordsman';

test('check Swordsman error name', () => {
  expect(() => {
    const newSw = new Swordsman('p', 'Swordsman');
    newSw.name = 'p';
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Swordsman error type', () => {
  expect(() => {
    const newSw = new Swordsman('Gamer', 'Mag');
    newSw.type = 'Mag';
  }).toThrowError('Неверный тип игрока');
});

test('check Swordsman is created', () => {
  const newSw = new Swordsman('gamer', 'Zombie');
  expect(newSw).toEqual(
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

test('check Swordsman func levelUp', () => {
  const newSw = new Swordsman('gamer', 'Swordsman');
  newSw.levelUp();
  expect(newSw).toEqual(
    {
      name: 'gamer',
      type: 'Swordsman',
      health: 100,
      level: 2,
      attack: 48,
      defence: 12,
    },
  );
});

test('check Swordsman  func damage', () => {
  const newSw = new Swordsman('gamer', 'Swordsman');
  newSw.damage(30);
  expect(newSw.health).toBe(73);
});

test('check Swordsman error damage', () => {
  expect(() => {
    const newSw = new Swordsman('gamer', 'Swordsman');
    newSw.health = -1;
    newSw.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});

test('check Swordsman error levelUp', () => {
  expect(() => {
    const newSw = new Swordsman('gamer', 'Swordsman');
    newSw.health = 0;
    newSw.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
