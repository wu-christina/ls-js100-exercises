## Exercise 1
What will the following code log to the console and why?

console.log(greeting);

var greeting = 'Hello world!';

## Solution 1
It will log undefined. When variables are declared with var, they are hoisted to
the top of the scope. We see the same behavior if the variable is declared and
initialized in the same line. The default initialization of the var is undefined.

---

## Exercise 2
What will the following code log to the console and why?

console.log(greeting);

let greeting = 'Hello world!';

## Solution 2
It will return an error because greeting must be initialized before it can be used.

---

## Exercise 3
What will the following code log to the console and why?

if (true) {\
  let myValue = 20;\
}

console.log(myValue);

## Solution 3
It will return an error. myValue is inititalized in the if statement and can only be used in the if block.

---

## Exercise 4
What will the following code log to the console and why?

function myFunction() {\
  let a = 1;

  if (true) {\
    console.log(a);\
  }\
}

myFunction();

## Solution 4
The console will log 1. The if statement will always be true and variables declared in the outer scope can be accessed in the inner scope. So, the code block will always log the value of a when myFunction is invoked.

--

## Exercise 5
What will the following code log to the console and why?

function myFunction() {\
  let a = 1;

  if (true) {\
    console.log(a);\
    let a = 2;\
    console.log(a);\
  }\
}

myFunction();

## Solution 5
The code above will cause a Reference Error. Everything in the if statement is block scoped. The first console.log is trying to access the a variable locally but because it is before the variable a is initialized and declared, it will result in an error.

---

## Exercise 6
What will the following code log to the console and why?

let a = 5;\
let b = false;

if (a > 4) {\
  let b = true;\
}

console.log(b);

## Solution 6
It will log false to the console. Variables declared in the if statement are block scoped - Anything initialized and declared in the block can be used in the block but not outside of it. In this exercise, the console.log method is in the global scope. It will access the global scope variable, which is the first variable b.

---

## Exercise 7
What will the following code log to the console and why?

let a = 1;

function myFunction() {\
  console.log(a);\
}

myFunction();

## Solution 7
The code above will log 1 to the console. Variable a is a global variable and can be accessed anywhere in the program.

---

## Exercise 8
What will the following code log to the console and why?

let a = 1;

function myFunction(a) {\
  console.log(a);\
}

let b = 2;

myFunction(b);

## Solution 8
The console will log 2. The a in the function is a parameter, which is a placeholder for an argument. It is not the same as the a variable declared above it. In JavaScript, all function arguments are pass by value. Meaning, when a function is envoked and has parameter(s), the value of the variable is directly passed in as the argument. When myFunction(b) is envoked, we know b points to 2 and so it will log 2.

---

## Exercise 9
What will the following code log to the console and why?

const a = 1;

function myFunction() {\
  a = 2;\
}

myFunction(a);

## Solution 9
It will result in an error. The function attempts to reassign a to 2 but is not possible because a is a constant.

---

## Exercise 10
What will the following code log to the console and why?

const a = {\
  firstName: 'John',\
  lastName: 'Doe'\
};

function myFunction() {\
  a.firstName = 'Jane';\
}

myFunction();

console.log(a);

## Solution 10
{ firsName: 'Jane',
	lastName: 'Doe'}

While constants can't be reassigned, the values within an object can be mutated.
