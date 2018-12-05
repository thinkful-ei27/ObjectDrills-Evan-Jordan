"use strict";

const loaf = {
	flour: 300,
	water: 210,
	hydration: function() {
		return (this.water / this.flour) * 100;
	}
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

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
