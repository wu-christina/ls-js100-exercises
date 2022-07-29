// Exercise 1
/* Write the function sum, such that it accepts two arguments and returns the
sum of its arguments. You may assume that the function arguments will always be
numbers */

function sum (num1, num2) {
	return num1 + num2;
}

console.log(sum(22, 10)); // 32

// Exercise 2
/* Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.'
to the console. What is the return value of the function? */

function brendanEichQuote() {
	console.log('Always bet on Javascript')
}

// The return value is undefined because there is no return statement.

brendanEichQuote();
// logs:
// Always bet on JavaScript.

// Exercise 3
/* Implement a function cite that takes two string arguments: the author of the
quote and what they said. It then logs the quote to the console, as in the
following example. */

function cite (author, quote) {
	console.log(`${author} said: ${quote}`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

// Exercise 4
/* Write a function that accepts a single argument, a number, and returns the
result of multiplying its argument by an exponent of 2 (also known as squaring
the number). */

function squaredNumber(number) {
	return number ** 2;
}

console.log(squaredNumber(3)); // 9

// Exercise 5
/* Determine the output that the following code will log to the console.


function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree; */

// Nothing will log on the console because the function is not invoked.

// Exercise 6
/* Write a function that compares the length of two strings. It should return -1
if the first string is shorter, 1 if the second string is shorter, and 0 if
they're of equal length, as in the following example: */

function compareByLength(string1, string2) {
	if (string1.length < string2.length) {
		return -1;
	} else if (string2.length < string1.length) {
		return 1;
	} else {
		return 0;
	}
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

// Exercise 7
/* Use JavaScript's string methods on the string 'Captain Ruby' to produce the
string 'Captain JavaScript'. */

console.log("Captain Ruby".replace("Ruby", "JavaScript"));

// Exercise 8
/* Write a function that takes an ISO 639-1 language code and returns a greeting
in that language. You can take the examples below or add whatever languages you
like. */

function greet (language) {
	switch(language) {
		case 'en':
			return 'Hi!';
		case 'fr':
			return 'Salut!';
		case 'pt':
			return 'Olá!';
		case 'de':
			return 'Hallo!';
		case 'sv':
			return 'Hej!';
		case 'af':
			return 'Haai!';
		default:
			'Hello!'
	}
}

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'

// Exercise 9
/* Write a function that extracts the language code from a locale. A locale is a
combination of a language code, a region, and usually also a character set, e.g
en_US.UTF-8. */

function extractLanguage(locale) {
	return locale.slice(0,2);
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// Exercise 10
/* Similar to the previous exercise, now write a function that extracts the region code from a locale. */

function extractRegion(locale) {
	return locale.slice(3,5);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// Exercise 11
/* Write a function localGreet that takes a locale as input, and returns a
greeting. The locale allows us to greet people from different countries
differently also when they share the language. */

function localGreet(locale) {
	let language = extractLanguage(locale);
	let country = extractRegion(locale);

	switch (country) {
		case 'US': return 'Hey';
		case 'GB': return 'Hello!';
		case 'AU': return 'Howdy!';
		default: return greet(language);
	}
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
