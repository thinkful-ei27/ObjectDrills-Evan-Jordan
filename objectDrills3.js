// 'use strict';

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour) * 100
//   }
// };

// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration());


// // Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// // Loop over the object using for ... in
// // Use console.log to show each property name and its associated value.

// const fuBar = {
//   foo: 'bar',
//   bar: 'biz',
//   fum: 'lum',
//   quux: 'luther',
//   spam: 'delicious'
// }

// for (const keys in fuBar) {
//   console.log(`{${keys}: ${fuBar[keys]}}`);
// }


// const foodBar = {
// 	meals: [
// 		'breakfast', 
// 		'second breakfast', 
// 		'elevenses', 
// 		'lunch', 
// 		'afternoon tea', 
// 		'dinner', 
// 		'supper'
// 	]
// }

// console.log(foodBar.meals[3]);

// // Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// // Store these objects in an array.
// // Iterate over the array and use console.log to show each person's job title and name.

// const people = [
//   {
//     name: 'Evan',
// 	jobTitle: 'bartender',
// 	boss: 'Steve'
//   },
//   {
//     name: 'Jordan',
// 	jobTitle: 'video editor',
// 	boss: 'George'
//   },
//   {
//     name: 'Spongebob',
// 	jobTitle: 'fry cook',
// 	boss: 'Gordon'
//   },
//   {
//     name: 'Steven Speilberg',
// 	jobTitle: 'director',
// 	boss: 'his wife'
//   },
//   {
//     name: 'Gordan Ramsy',
//     jobTitle: 'chef'
//   }
// ]

// const jobAndName = people.map(person => {
// 	if (person.hasOwnProperty('boss')) {
// 		console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
// 	} else {
// 		console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
// 	}
// });

// jobAndName;

const letterCipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

function decode (str, obj) {
  let letter = ""
 switch(str[0]) {

  case 'a':
  letter = str.charAt(obj.a);
  break;

  case 'b':
  letter = str.charAt(obj.b);
  break;

  case 'c':
  letter = str.charAt(obj.c);
  break;
  
  case 'd':
  letter = str.charAt(obj.d);
  break;

  default:
  letter = " "
  break;
  }
 return letter;
}

function decodeWords (string) {
	const arr = string.split(" ");
	const answer = [];
	for (i=0; i<arr.length; i++){
		answer.push(decode(arr[i], letterCipher));
	}

	console.log(answer.join(''));
}

decodeWords("craft block argon meter bells brown croon droop");

const test = createCharacter('evan', 'billy', 'white', 'heaven', 0, 0 )

function createCharacter (name, nickname, race, origin, attack, defense ) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {return `${name} is a ${race} from ${origin}.`}
  }
}




console.log(test.describe());


