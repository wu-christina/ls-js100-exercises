// Exericse 1
/* Add some code inside of the for loop below that logs the current value of i
to the console on each iteration. Before you run the code: What sequence of
numbers do you expect to be logged? */

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 0
// 2
// 4
// 6
// 8
// 10

// Exercise 2
/* The code below logs the numbers from 1 to 10. Change it, so that it instead
logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'. */

for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}

console.log('Launch!');

// Exercise 3
// Write a loop that logs greeting three times.

let greeting = 'Aloha!';

for (let i = 0; i < 3; i++) {
	console.log(greeting);
}


// Exercise 4
/* Write a for loop that iterates over all numbers from 1 to 100, and outputs
the result of multiplying each element by 2. */

for (let i = 1; i <= 100; i++) {
	console.log(i * 2);
}

// Exercise 5
/* Using the code below as a starting point, write a while loop that logs the
elements of array at each index, and terminates after logging the last element
of the array. */

let array = [1, 2, 3, 4];
let index = 0;

while(index < array.length) {
	console.log(array[index]);
	index += 1;
}

// Exercise 6
/* Take a moment to read the MDN documentation on the continue statement. Then
write a for loop that loops over the elements of the array cities and logs the
length of each string to the console. If the element is null, skip forward to
the next iteration without logging anything to the console. */


let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
	if (cities[i] === null) {
		continue;
	}
	console.log(cities[i].length);
}

// Exercise 7
/* The following code keeps looping forever. (You can hit Ctrl-C to stop it.)
Why is that? Also modify it so that it stops after the first iteration. */

// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

// It keeps incrementing forever because it does not have a condition to tell it to stop looping.

for (let i = 0; i < 1; i ++) {
	console.log("and on");
}

// Exercise 8
// Write a while loop that logs all odd natural numbers between 1 and 40.

let counter = 1;

while (counter <= 40) {
	console.log(counter);
	counter += 2;
}

// Exercise 9
/* Loop over the elements of the array fish, logging each one. Terminate the
loop immediately after logging the string 'Nemo'. */

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);

	if(fish[i] === 'Nemo') {
		break;
	}
}

// Exercise 10
/* What is the difference between the following two code snippets? Check the MDN
documentation on while and do...while. */

// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }

// let counter = 0;

// do {
//   console.log('Woooot!');
//   counter -= 1;
// } while (counter > 0);

// In the while loop (first code snippet), the while statement is checked if true or false. If true, it will run the block of code. It will keep running until the condition is no longer true.

// In a do...while loop (second code snippet), the code block always runs at least once. Then, the condition is checked. If the condition is false, it will not execute the code again.
