import Boweman from '../Boweman';

test('check boweman is created', () => {
  const newBw = new Boweman('gamer', 'Zombie');
  expect(newBw).toEqual(
    {
      name: 'gamer',
      type: 'Boweman',
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

test('check Boweman error type', () => {
  expect(() => {
    const newBw = new Boweman('gamer', 'Boweman');
    newBw.level = -1;
    newBw.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('check Boweman error type', () => {
  expect(() => {
    const newBw = new Boweman('gamer', 'Boweman');
    newBw.health = -1;
    newBw.damage(30);
  }).toThrowError('нельзя повысить жизненный уровень умершего');
});
