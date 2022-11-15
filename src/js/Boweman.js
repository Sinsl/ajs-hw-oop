import Character from './Character';

export default class Boweman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.type = 'Boweman';
    this.attack = 25;
    this.defence = 25;
  }
}
