// Exercise 1
/* Determine the length of the string "These aren't the droids you're looking for." */

"These aren't the droids you're looking for.".length;

// Exercise 2
/* Take the string 'confetti floating everywhere' and transform it to upper case. */

'confetti floating everywhere'.toUpperCase();

// Exercise 3
/* Implement a function repeat that repeats an input string a given number of
times, as shown in the example below; without using the pre-defined string
method String.prototype.repeat(). */

function repeat(times, string) {
	let newString = string;
	for (let i = 1; i < times; i++) {
		newString += string;
	}
	return newString;
}

console.log(repeat(3, 'ha')); // 'hahaha'

// Exercise 4
/* How can you assign this string to a single variable, preserving the line break?

A pirate I was meant to be!
Trim the sails and roam the sea! */

let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';

// Exercise 5
/* Given strings like the following, how can you check whether they're equal
irrespective of whether the characters they contain are upper or lower case? */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

/* You can change them to the same case and then compare. */

string1.toLowerCase() === string2.toLowerCase(); // true

// Exercise 6
/* Write code that checks whether the string byteSequence contains the character x. */

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

byteSequence.includes('x');

// Exercise 7
/* Write a function that checks whether a string is empty or not. */

function isBlank(string) {
	return string.length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

// Exercise 8
/* Change your isBlank function from the previous exercise to return true if the
string is empty or only contains whitespace. */

function isBlankVersion2(string) {
	return string.length === 0 || string.includes(' ');
}

isBlankVersion2('mars'); // false
isBlankVersion2('  ');   // true
isBlankVersion2('');     // true

// Exercise 9
/* Write code that capitalizes the words in the string 'launch school tech &
talk', so that you get the string 'Launch School Tech & Talk'. */

function capitalize(string) {
	let words = string.split(' ');
	let newWords = words.map(function(word) {
			return word[0].toUpperCase() + word.slice(1);
	})
	return newWords.join(' ');
}

capitalize('launch school tech & talk');

// Exercise 10
