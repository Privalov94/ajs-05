export default class Character {
  constructor(name, type) {
    const arrName = ['Boweman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length <= 2) {
      throw new Error('Длина имени не может быть короче 2 вимволов');
    }

    if (!arrName.includes(type)) {
      throw new Error('Неверный тип игрока');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('нельзя повысить жизненный уровень умершего');
    }
  }
}
