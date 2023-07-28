// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import { Fighter } from "./class/Fighter";
import { Weapon } from "./class/Weapon";
import { Shield } from "./class/Shield";

// FIGHTERS
const Pebble: Fighter = new Fighter(
  "\u{1FAA8}  Petit caillou, The True French Pebble",
  1,
  1
);
/* : Fighter is not necessary because "new Fighter" is already typed */

const Human = new Fighter("\u{1F938} Heracles", 20, 6);
const Lion = new Fighter("\u{1F981} Nemean Lion", 11, 13);
const Sanglier = new Fighter("🐗 Boar of Erymanthe", 20, 25);

// WEAPONS
const Stick: Weapon = new Weapon("The Stick ?!"); // Tribute to the best's anecdoctes group ever
/* : Weapon is not necessary because "new Weapon" is already typed */
const Paper = new Weapon("Paper"); // Fear the paper cut!
const Bondage = new Weapon("Bondage", -10); //Fear the heal // Not only moral support
const Sword = new Weapon("Épée");
const HotPepper = new Weapon("Hot pepper", 100); //Burn body, spirit and soul in one touch
const Napoleon = new Weapon("Three centimeters", 100); // Small range but huge damage

//SHIELDS
const Stack: Shield = new Shield("The Stack !?"); // Tribute to the best's anecdoctes group ever
/* : Shield is not necessary because "new Shield" is already typed */

const TheLook = new Shield("The Look");
const Wall = new Shield("Brick's wall");
const Hylian = new Shield("Hylian Shield");

const displayTxtIntro = (Monster: Fighter) => {
  console.log(
    Human.name,
    "warms up, tightens his muscles, crushes A LOT of rocks with his bare hands. He's ready to fight today!\n",
    Human.name,
    "enters the cave, the",
    Monster.name,
    "is there, annoyed by his unexpected guest who did not knock before entering his lair. He keeps his red eyes fixed on his new enemy.\nA fight is imminent:"
  );
};

const setWeaponAndShieldToFighter = (
  fighter: Fighter,
  weapon?: Weapon,
  shield?: Shield
) => {
  let text: string = fighter.name;

  if (weapon != null) {
    fighter.setWeapon(weapon);
    (text += " uses " + weapon.name), "to attack";
  }
  if (shield != null && text != fighter.name) {
    text += " and ";
  }
  if (shield != null) {
    fighter.setShield(shield);
    (text += " with " + shield.name), "to defend";
  }
};

const displayTxtOutroWinner = (Winner: Fighter) => {
  console.warn(
    "\u{21DB}🏆",
    Winner.name,
    "wins with",
    Winner.life + " point(s) of life"
  );
};

const displayTxtOutroLoser = (Loser: Fighter) => {
  console.warn("\n💀 ", Loser.name, "is dead \u{1FAA6}");
};

// Start a fight against the Lion
const labourBattle = (
  Monster: Fighter,
  usedWeapon?: Weapon,
  usedShield?: Shield
) => {
  displayTxtIntro(Monster);
  setWeaponAndShieldToFighter(
    Human,
    usedWeapon ? usedWeapon : Sword,
    usedShield ? usedShield : TheLook
  );

  let round: number = 0;
  while (Human.isAlive() && Monster.isAlive()) {
    round++;
    console.log("\n\u{1FAA7}  Round:", round, "\u{1FAA7}");
    Human.fight(Monster);
    if (!Monster.isAlive()) {
      break;
    }
    Monster.fight(Human);
  }

  if (Monster.life === 0) {
    displayTxtOutroLoser(Monster);
    displayTxtOutroWinner(Human);
    console.warn(
      "\n\u{26A0}",
      Human.name +
        " walks away from the battle when he steps on a pebble on the road..."
    );
    console.log(
      Pebble.name +
        " is very angry seing his nemesis staying alive. It's strengh has been levelling up each round since the beginning of the fight."
    );
    Pebble.setStrengthValue(round);
    Pebble.fight(Human);
    if (Human.life === 0) {
      console.log(
        "\n\u{21DB}🏆",
        Pebble.name,
        "wins. Nature is the greatest warrior of all. It's family is finally avenged!"
      );
    } else {
      displayTxtOutroWinner(Human);
    }
  } else {
    displayTxtOutroLoser(Human);
    displayTxtOutroWinner(Monster);
  }
};

const fighterName = process.argv[2];
const fighterStrength = parseInt(process.argv[3]);
const fighterDexterity = parseInt(process.argv[4]);

const fighterFromCLI: Fighter = new Fighter(
  fighterName,
  fighterStrength,
  fighterDexterity
);

const defaultBattle = () => {
  const random = Math.floor(Math.random() * 5);
  console.log("random :>> ", random);
  if (random <= 2) return Lion;
  else return Sanglier;
};

labourBattle(
  process.argv[2] !== undefined ? fighterFromCLI : defaultBattle(),
  Stick,
  Stack
);
