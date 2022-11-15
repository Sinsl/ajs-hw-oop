import Undead from '../Undead';

test('check Undead is created', () => {
  const newUn = new Undead('gamer', 'Zombie');
  expect(newUn).toEqual(
    {
      name: 'gamer',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Undead func levelUp', () => {
  const newUn = new Undead('gamer', 'Undead');
  newUn.levelUp();
  expect(newUn).toEqual(
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

test('check Undead func damage', () => {
  const newUn = new Undead('gamer', 'Undead');
  newUn.damage(30);
  expect(newUn.health).toBe(77.5);
});
