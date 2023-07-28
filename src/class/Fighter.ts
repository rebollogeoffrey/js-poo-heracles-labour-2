/* Fighter class definition */
import { IFighter } from "../Interface";
import { Weapon } from "./Weapon";
import { Shield } from "./Shield";
import { MAX_LIFE } from "../const";

export class Fighter implements IFighter {
  name: string;
  strength: number;
  dexterity: number;
  life: number;
  weapon: null | Weapon;
  shield: null | Shield;
  isHardMode: boolean;

  constructor(name: string, strength: number, dexterity: number) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
    this.isHardMode = false;
  }

  fight(defender: Fighter) {
    const previousLife: number = defender.life;

    const attack = this.getDamage();
    const randomAttack = Math.floor(Math.random() * attack);
    let attackValue = Math.max(randomAttack - defender.getDefense(), 0);
    if (attackValue <= 0) {
      attackValue = 1;
    }

    defender.life = defender.life - attackValue;
    if (defender.life <= 0) {
      defender.life = 0;
    }

    console.log(
      this.name,
      "🗡️  attacks \u{1F6E1} ",
      defender.name,
      "(",
      previousLife,
      "->",
      defender.life,
      "💙)"
    );

    return defender.life;
  }

  private getDamage() {
    if (this.weapon !== null) {
      return this.strength + this.weapon.damage;
    } else {
      return this.strength;
    }
  }

  private getDefense() {
    if (this.shield !== null) {
      return this.shield.protection + this.dexterity;
    } else {
      return this.dexterity;
    }
  }

  isAlive() {
    return this.life ? true : false;
  }

  switchIsHardMode() {
    this.isHardMode = !this.isHardMode;
  }

  setWeapon(weapon: Weapon) {
    this.weapon = weapon;
    this.isHardMode ? (this.shield = null) : (this.shield = this.shield);
  }

  setShield(shield: Shield) {
    this.shield = shield;
    this.isHardMode ? (this.weapon = null) : (this.weapon = this.weapon);
  }

  setStrengthValue(strength: number) {
    this.strength = strength;
  }
}

module.exports = { Fighter };
