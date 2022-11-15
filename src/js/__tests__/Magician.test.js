import Magician from '../Magician';

test('check Magician is created', () => {
  const newMg = new Magician('gamer', 'Zombie');
  expect(newMg).toEqual(
    {
      name: 'gamer',
      type: 'Magician',
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

test('check Magician func damage', () => {
  const newMg = new Magician('gamer', 'Magician');
  newMg.damage(30);
  expect(newMg.health).toBe(82);
});
