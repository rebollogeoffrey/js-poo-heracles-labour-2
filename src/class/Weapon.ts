import { IWeapon } from "../Interface";

export class Weapon implements IWeapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number = 10) {
    this.name = name;
    this.damage = damage;
  }
}

module.exports = { Weapon };
