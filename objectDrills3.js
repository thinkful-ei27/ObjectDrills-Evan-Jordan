'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());


// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

const fuBar = {
  foo: 'bar',
  bar: 'biz',
  fum: 'lum',
  quux: 'luther',
  spam: 'delicious'
}

for (const keys in fuBar) {
  console.log(`{${keys}: ${fuBar[keys]}}`);
}


const foodBar = {
	meals: [
		'breakfast', 
		'second breakfast', 
		'elevenses', 
		'lunch', 
		'afternoon tea', 
		'dinner', 
		'supper'
	]
}

console.log(foodBar.meals[3]);

// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const people = [
  {
    name: 'Evan',
    jobTitle: 'bartender'
  },
  {
    name: 'Jordan',
    jobTitle: 'video editor'
  },
  {
    name: 'Spongebob',
    jobTitle: 'fry cook'
  },
  {
    name: 'Steven Speilberg',
    jobTitle: 'director'
  },
  {
    name: 'Gordan Ramsy',
    jobTitle: 'chef'
  }
]

const jobAndName = people.map(person => console.log(person.name + ' ' + person.jobTitle)) 

jobAndName;