import Daemon from '../Daemon';

test('check Daemon error name', () => {
  expect(() => {
    const newDe = new Daemon('p', 'Daemon');
    newDe.name = 'p';
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Daemon error type', () => {
  expect(() => {
    const newDe = new Daemon('Gamer', 'Mag');
    newDe.type = 'Mag';
  }).toThrowError('Неверный тип игрока');
});

test('check Daemon is created', () => {
  const newDe = new Daemon('gamer', 'Zombie');
  expect(newDe).toEqual(
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

test('check Daemon func levelUp', () => {
  const newDe = new Daemon('gamer', 'Daemon');
  newDe.levelUp();
  expect(newDe).toEqual(
    {
      name: 'gamer',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    },
  );
});

test('check Daemon  func damage', () => {
  const newDe = new Daemon('gamer', 'Daemon');
  newDe.damage(30);
  expect(newDe.health).toBe(82);
});

test('check Daemon error damage', () => {
  expect(() => {
    const newDe = new Daemon('gamer', 'Daemon');
    newDe.health = -1;
    newDe.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});

test('check Daemon error levelUp', () => {
  expect(() => {
    const newDe = new Daemon('gamer', 'Daemon');
    newDe.health = 0;
    newDe.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
