// Exercise 1
/* How can we alter the function definition of greet so that the parameter
greeting is assigned a default value of 'Hello' when no argument is passed to
the function invocation? */

function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// Exercise 2
/* Change the function greet from the previous exercise, so that it takes two
arguments: a greeting with 'Hello' as default value, and a recipient with
'world' as default value. */

function greet(greeting = 'Hello', reipient = 'world') {
	console.log(`${greeting}, ${reipient}!`)
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// Exercise 3
/* Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below. It should log Good morning, Launch School! to the console.*/

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
	console.log(greeting() + ", " + recipient() + "!");
}

// Exercise 4
/* Create a function that calculates a person's body mass index (BMI). It should
take two parameters: someone's height (in cm) and weight (in kg). Return the result as a string rounded to two decimals. */

function calculateBMI(height, weight) {
	let heightInMeters = height * 0.01;
	return Math.round((weight / heightInMeters ** 2) * 100) / 100;
}

console.log(calculateBMI(180, 80))

// Exercise 5
/* Implement a function catAge that takes a number of human years as input and
converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years. */

function catAge(humanYears) {
	let firstHumanYear = 15;
	let secondHumanYear = 9;
	let everyYearAfter = 4;
	let totalHumanYears = 0;

	if (humanYears === 0) {
		return totalHumanYears;
	} else if (humanYears === 1) {
		totalHumanYears = firstHumanYear;
	} else if (humanYears === 2) {
		totalHumanYears = firstHumanYear + secondHumanYear;
	} else {
		totalHumanYears = firstHumanYear + secondHumanYear + everyYearAfter *(humanYears - 2);
	}
	return totalHumanYears;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

// Exercise 6
/* Create a function removeLastChar that takes a string as an argument, and
returns the string without the last character. */

function removeLastChar(string) {
	return string.slice(0, string.length - 1);
}

// Exercise 7
/* Refactor the function below using arrow syntax. Line 9 should still log the
same sentence. */

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => {
	return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

// Exercise 8
/* The function initGame below returns an object. Refactor it using arrow function syntax. */

let initGame = () => ({
    level: 1,
    score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
