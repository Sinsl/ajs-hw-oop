import Swordsman from '../Swordsman';

test('check Swordsman is created', () => {
  const newSw = new Swordsman('gamer', 'Zombie');
  expect(newSw).toEqual(
    {
      name: 'gamer',
      type: 'Swordsman',
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

test('check Swordsman func damage', () => {
  const newSw = new Swordsman('gamer', 'Swordsman');
  newSw.damage(30);
  expect(newSw.health).toBe(73);
});
