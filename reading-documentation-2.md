## Exercise 1
In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{\
    console.log('Drip...');\
    ice_cream_density -= 1;\
}

console.log('The '+ ice_cream_taste +' ice cream melted.');

## Solution 1
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while(iceCreamDensity > 0) {\
  console.log('Drip...');\
  iceCreamDensity -= 1;\
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

---

## Exercise 2
Without looking into your notes, try to remember which primitive data types are defined in JavaScript. Then find this information on MDN.

## Solution 2
* number
* string
* boolean
* null
* undefined
* symbol
* bigint

---

## Exercise 3
Using the documentation, determine how we can find the largest numeric value that can be represented in JavaScript. Write a line of code that returns this value.

## Solution 3
Number.MAX_VALUE;

---

## Exercise 4
Find the MDN documentation on operator precedence, and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

## Solution 4
Exponentiation has higher precedence that multiplication, division, and addition.
Multiplication and division has higher precedence that addition.

20 + 9 / 10 = 20.9;

---

## Exercise 5
Find out what Date.now() returns.

## Solution 5
It returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

---

## Exercise 6
What is the difference between the two methods and which one should you use?

let today = new Date();

today.getYear();
today.getFullYear();

## Solution 6
getYear() method is deprecated and no longer recommended. It returns the year in the specified date according to local time minus 1900. It does not return full years.

getFullYear method returns a number corresponding to the year of the given date, according to local time. It returns an absolute number and returns the full year.

---

## Exercise 7
How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

## Solution 7
join() method expects one optional argument, the separator. The separator is a string that will be used to separate each pair of adjacent elements of the array. If no argument is passed in the method, the default separator is ','. If additional arguments are passed in the method, they will be ignored.

---

## Exercise 8
Find out how we can join two or more strings together.

## Solution 8
There are multiple ways to join two strings together, including:
* string concatenation using +
* concat method

---

## Exercise 9
The below code raises a SyntaxError. If you run the code, you'll see the following error message: SyntaxError: Unexpected token &&. Find and read the documentation about this error on MDN. Then, fix the code.

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {\
  console.log('"People are so bad at driving cars ' +\
    'that computers don\'t have to be that good to be much better." ' +\
    '-- Marc Andreessen');\
}

## Solution 9
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit > 5)) {\
  console.log('"People are so bad at driving cars ' +\
    'that computers don\'t have to be that good to be much better." ' +\
    '-- Marc Andreessen');\
}

Per [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token), "The JavaScript exceptions "unexpected token" occur when a specific language construct was expected, but something else was provided. This might be a simple typo."

In the code above, brackets needed to be placed around &&.

---

## Exercise 10
You'll see that the code raises an error: TypeError: tweet.length is not a function. Check the documentation of both TypeError and length, in order to find out what causes the error.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {\
  console.log('Tweet is too long!');\
}

## Solution
length is a property of a string, not a method so parentheses cannot be used.
