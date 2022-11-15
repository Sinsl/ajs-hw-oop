import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
