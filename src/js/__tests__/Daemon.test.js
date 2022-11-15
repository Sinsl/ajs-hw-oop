import Daemon from '../Daemon';

test('check Daemon is created', () => {
  const newDm = new Daemon('gamer', 'Zombie');
  expect(newDm).toEqual(
    {
      name: 'gamer',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Daemon error name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const newDm = new Daemon('b', 'Daemon');
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Daemon error type', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const newDm = new Daemon('Daemon', 'Daemons');
  }).toThrowError('Неверный тип игрока');
});
