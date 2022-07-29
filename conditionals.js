// Exercise 1
/* Without looking at your notes or MDN, try to recall all values that count as
falsy in JavaScript. */

// false
// null
// undefined
// NaN
// empty string
// 0
// -0
// 0n

// Exercise 2
/* The code provided below will randomly initialize randomNumber to either 0 or
1 each time it is executed. Write an if statement that logs 'Yes!' if
randomNumber is 1, and 'No.' if randomNumber is 0. */

let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
	console.log("Yes!");
} else {
	console.log("No.");
}

// Exercise 3
/* Take your code from the previous exercise and rewrite the conditional so that
it uses the ternary if-then-else operator. */

console.log(randomNumber === 1 ? 'Yes!' : 'No.');

// Exercise 4
/* Initialize a variable weather with a string value being "sunny", "rainy", or
anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather. */

let weather = 'rainy';

if (weather === 'sunny') {
	console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
	console.log('Grab your umbrella.');
} else {
	console.log("Let's stay inside.")
}

// Exercise 5
/* Take a look at the code below. Without running it, determine what it will log
to the console. If you're not sure, refer to the MDN documentation on switch
statements.

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

*/

// neigh
// tweet tweet
// *cricket*

// Exercise 6
/* Take your code from the previous Check the Weather exercise and rewrite it as
a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'. */

let weatherStatus = 'snow storm';

switch (weatherStatus) {
	case 'sunny':
		console.log("It's a beautiful day!");
		break;
	case 'rainy':
		console.log("Grab your umbrella.");
		break;
	case 'snow storm':
		console.log('Wear warm layers.');
		break;
	default:
		console.log("Let's stay inside.")
}

// Exercise 7
/* Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
} */

/* It will always log 'Yes!' because the false || true conditional will always
be true. Hence, the code block underneath will execute. */

// Exercise 8
/* Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}
*/

/* It will always log 'No...' because the true && false conditional will always evaluate as false. So, the program will go to the else statement and run the code underneath it. */

// Exercise 9
/* Without running the below code, determine what will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice); */

/* It will log $3.99. Since sale is true, !sale is false. The ternary operator
is saying if sale is false, it will return $5.25. Otherwise, it will return $3.99. Since sale is true, it logs $3.99. */

// Exercise 10
/* Determine what the following code snippet logs. First solve it in your head
or on paper, and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); */

// speed > 0 -> false
// acceleration > 0 -> true
// brakingforce < acceleration -> true
// true && (false || true) -> true

/* Bonus question: Do we need the parentheses in the boolean expression or could we
also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0; */

// Yes, because it determines precedence.
