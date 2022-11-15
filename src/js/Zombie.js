import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
