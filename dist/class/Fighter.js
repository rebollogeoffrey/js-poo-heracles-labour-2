"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const const_1 = require("../const");
class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = const_1.MAX_LIFE;
        this.weapon = null;
        this.shield = null;
        this.isHardMode = false;
    }
    fight(defender) {
        const previousLife = defender.life;
        const attack = this.getDamage();
        const randomAttack = Math.floor(Math.random() * attack);
        let attackValue = randomAttack - defender.getDefense();
        if (attackValue <= 0) {
            attackValue = 1;
        }
        defender.life = defender.life - attackValue;
        if (defender.life <= 0) {
            defender.life = 0;
        }
        console.log(this.name, "🗡️  attacks \u{1F6E1} ", defender.name, "(", previousLife, "->", defender.life, "💙)");
        return defender.life;
    }
    getDamage() {
        if (this.weapon !== null) {
            return this.strength + this.weapon.damage;
        }
        else {
            return this.strength;
        }
    }
    getDefense() {
        if (this.shield !== null) {
            return this.shield.protection + this.dexterity;
        }
        else {
            return this.dexterity;
        }
    }
    isAlive() {
        if (this.life) {
            return true;
        }
        else {
            return false;
        }
    }
    switchIsHardMode() {
        this.isHardMode = !this.isHardMode;
    }
    setWeapon(weapon) {
        this.weapon = weapon;
        this.isHardMode ? (this.shield = null) : (this.shield = this.shield);
    }
    setShield(shield) {
        this.shield = shield;
        this.isHardMode ? (this.weapon = null) : (this.weapon = this.weapon);
    }
    setStrengthValue(strength) {
        this.strength = strength;
    }
}
exports.Fighter = Fighter;
module.exports = { Fighter };
