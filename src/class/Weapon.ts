export class Weapon {
    name:string;
    damage:number = 10;

    constructor(name:string, damage?:number){
        this.name=name;
        if(damage !== undefined){
            this.damage=damage;
        }
    }

}

module.exports = {Weapon}