// Exercise 1
/* Write the code necessary to retrieve the value of the courses property of our
student object. */

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student['courses'];

// Exercise 2
/* Given the below object jane, write code that retrieves the country in which
Jane is located. */

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

jane.location.country;

// Exercise 3
/* Below is a simple object representing our dog, Fido. Write code to add properties 'age' and 'favorite food' to the fido object. */

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

fido.age = 12;
fido['favorite food'] = 'apples';
console.log(fido);

// Exercise 4
/* Add a property to the below object, jack, so that the code on line 13 logs
'Hej, Bobby!' to the console. */

let jack = {
  firstName: 'Jack',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
		console.log('Hej' + ", " + name + "!");
	}
};

jack.greet('Bobby');

// Exercise 5
/* Before running any code, determine what difference there will be in the
output of the two code snippets below (if any). */

// Snippet 1
// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // ?

// Snippet 2
// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // ?

// Snippet 1 will log: {prefix: 'Pacific'}
// Snippet 2 will log: {Indian: 'Pacific'}

// Exercise 6
// Run the snippet below and explain why "It's true!" is never output.


let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// Property names are strings. The if statement in the loop loop is looking for a true boolean, not a 'true' string. Thus, the if condition will always be false.

// Exercise 7
/* Write code that stores all of the vehicle property names in an array called
keys. */

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

// Exercise 8
/* Convert the person object into a nested array nestedPerson, containing the
same key-value pairs. */

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson)

// Exercise 9
/* Write code that does the reverse, starting from a nested array of pairs and
building an object. */

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

console.log(Object.fromEntries(nestedArray))

// Exercise 10
/* Write a function clone that takes an object as argument and returns a shallow
copy of that argument. A shallow copy returns a new object that is a copy of the
original object. However, only the object itself and any properties with
primitive values are duplicated. Properties that are themselves objects are
copied "by reference" -- that is, only a pointer to the object is copied. */

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
