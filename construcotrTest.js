class createCharacter {
	constructor (name, nickname, race, origin, attack, defense, ) {
		{
			this.name = name;
			this.nickname = nickname;
			this.race = race;
			this.origin = origin;
			this.attack = attack;
			this.defense= defense;
		}
		this.describe = function() {return `${this.name} is a ${this.race} from ${this.origin}.`;};
		this.evaluateFight = function(character) {
			let damage = character.attack - this.defense;
			if (damage > 0) { 
				return `Your opponent takes ${this.attack} damage and you recieve ${damage} damage.`;
			} else {return `Your opponent takes ${this.attack} damage and you recieve 0 damage.`;}
		};
	}
}

const characters = [
	new createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6,), 
	new createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1), 
	new createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
	new createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
	new createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
	new createCharacter("Arwen Undomiel", "Arwen", "Half-Elf", "Rivendell", 40, 80)
];



console.log(characters);