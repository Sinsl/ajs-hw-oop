// TODO: write your code here
import Character from './Character';
import Boweman from './Boweman';

const char = new Character('charName', 'Swordsman');

// eslint-disable-next-line no-console
console.log('выводим игрока в app:');
// eslint-disable-next-line no-console
console.log(char);

const bowe = new Boweman('bowName', 'Swordsman', 65);

// eslint-disable-next-line no-console
console.log('выводим игрока Boweman в app:');
// eslint-disable-next-line no-console
console.log(bowe);

bowe.levelUp();

bowe.damage(100);
