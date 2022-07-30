// Exercise 1
// Write a function that returns the first element of an input array.

function first(array) {
	return array[0];
}

first(['Earth', 'Moon', 'Mars']); // 'Earth'

// Exercise 2
// Write a function that returns the last element of an input array.

function last(array) {
	return array[array.length - 1];
}
last(['Earth, Moon', 'Mars']);

// Exercise 3
// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');
energy; // ['solar', 'wind', 'tidal', 'fusion', 'geothermal']

// Exercise 4
// Split the string alphabet into an array of characters.

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

alphabet.split('');

// Exercise 5
// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

function counter(array) {
	let count = array.filter(number => number >= 100);
	return count.length;
}

counter(scores);

// Exercise 6
/* We've been given an array of vocabulary words grouped into sub-arrays by
meaning. This is a two-dimensional array or a nested array. Write some code that
iterates through the sub-arrays and logs each vocabulary word to the console. */

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function wordLogger(words) {
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		for (let j = 0; j < words[i].length; j++) {
			console.log(word[j]);
		}
	}
}

wordLogger(vocabulary);

// Exercise 7
/* Predict the output of the below code. When you run the code, do you see what
you expected? Why or why not? */

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/* This returns false because JavaScript treats two arrays as equal only when they are the same array, pointing in the same spot in memory. */

// Exercise 8
/* How can you check whether a variable holds a value that is an array? */

function filter(input) {
  return Array.isArray(input);
}

// Exercise 9
/* Write a function that checks whether or not a particular destination is
included within destinations, without using the built-in method Array.prototype.
includes(). */

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city, destinations) {
	let checkCity = destinations.filter(destination => destination === city)
	return checkCity.length > 0;
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

// Exercise 10
/* Write some code that returns a string, with each portion of the passcode
separated by a hyphen (-). */


let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

passcode.join('-');

// Exercise 11
/* Write code that removes the items from 'groceryList' one by one, until it is empty. */

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// groceryList; // []

function removeItems(list) {
	while (list.length > 0) {
		console.log(list.shift());
	}
}

removeItems(groceryList);
