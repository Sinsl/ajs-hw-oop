import Character from './Character';

export default class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
