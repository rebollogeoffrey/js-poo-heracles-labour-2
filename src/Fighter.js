/* Fighter class definition */

const MAX_LIFE = 100;
export default class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  // Lancer un combat
  fight(defender) {
    // calculer les points d'attaques
    const attackPoints = this.getRandomInt(this.strength);
    // calculer le nombre des dommages
    const damages = Math.max(attackPoints - defender.dexterity, 0);
    // calculer les nombres de vies
    defender.life = Math.max(defender.life - damages, 0);
  }

  // Genérer un nombre aléatoire entre 1 et max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Déterminer si un combattant est toujours en vie
  isAlive() {
    return this.life > 0;
  }
}
