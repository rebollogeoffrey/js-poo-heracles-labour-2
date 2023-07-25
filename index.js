// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import Fighter from "./src/Fighter.js";

// instancier la class Fighter pour deux players
const heracles = new Fighter(`🧔 Heracles`, 20, 6);
const nemean = new Fighter(`🦁 Nemean Lion`, 11, 13);

// afficher le resultat dans la console
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

// checker les status des players si winner ou loser
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};

for (let round = 0; heracles.isAlive() && nemean.isAlive(); round++) {
  console.log(`🕛 Round #${round}`);

  heracles.fight(nemean);
  console.log(roundDisplay(heracles, nemean));

  nemean.fight(heracles);
  console.log(roundDisplay(nemean, heracles));
}
// let round = 0;

// while (heracles.isAlive() && nemean.isAlive()) {
//   console.log(`🕛 Round #${round}`);

//   heracles.fight(nemean);
//   console.log(roundDisplay(heracles, nemean));

//   nemean.fight(heracles);
//   console.log(roundDisplay(nemean, heracles));

//   round++;
// }

const result = score(heracles, nemean);

// afficher le resultat du combat
console.log(`💀 ${result.loser.name} is dead`);
console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
