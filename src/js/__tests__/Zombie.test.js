import Zombie from '../Zombie';

test('check Zombie is created', () => {
  const newZb = new Zombie('gamer', 'Swordsman');
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

test('check Zombie func damage', () => {
  const newZb = new Zombie('gamer', 'Zombie');
  newZb.damage(30);
  expect(newZb.health).toBe(73);
});
