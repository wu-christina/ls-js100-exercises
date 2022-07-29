## Exercise 1
What is an excellent destination when looking for JavaScript documentation?

## Solution 1
[MDN Web Docs](https://developer.mozilla.org/en-US/)

---

## Exercise 2
Find out whether JavaScript has a method to lowercase a string, for example converting 'Aloha, World!' into 'aloha, world!.

## Solution 2
'Aloha, World!'.toLowerCase();

---

## Exercise 3
Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

## Solution 3
No method exists. However, one way to implement this is use toUpperCase method on the first character of the string and concatenate the rest of the string that was converted to lowercase.

'mountain'[0].toUpperCase() + 'mountain'.slice(1).toLowerCase();

'mOUNTAIN'[0].toUpperCase() + 'mOUNTAIN'.slice(1).toLowerCase();

---

## Exercise 4
Locate the documentation for the Array built-in object on MDN.

How can we access the element 'and' in the array ['fish', 'and', 'chips']?

## Solution 4
['fish', 'and', 'chips'][1];

---

## Exercise 5
What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console.

## Solution 5
It will return undefined.

---

## Exercise 6
What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1]; // line 3
trees.pop();						 // line 4
trees[trees.length - 1]; // line 5

## Solution 6
trees[trees.length - 1]; // 'palm tree'
trees.pop();						 // 'palm tree'
trees[trees.length - 1]; // 'sequoia'

---

## Exercise 7
Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:

typeof 23.5;
typeof 'Call me Ishmael.';
typeof false;
typeof 0;
typeof null;
typeof undefined;

## Solution 7
| Statement | Return Value |
| ------------ | ----------- |
| typeof 23.5; | 'number' |
| typeof 'Call me Ishmael.'; | 'string' |
| typeof false; | 'boolean' |
| typeof 0; | 'number' |
| typeof null; | 'object' - Generally, regarded as a mistake |
| typeof undefined; | 'undefined' |

---

## Exercise 8
What will the following statements return?

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;
typeof words;
typeof isValid;

## Solution 8
typeof tweet;			// string
typeof words; 		// 'object
typeof isValid;   // 'boolean'

---

## Exercise 9
What will the following statements evaluate to?

let tweet = 'Starting to get the hang of it... #javascript #launchschool';

tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');

## Solution 9
tweet.split(' ');
// ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']

tweet.split(' ').reverse();
// ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']

tweet.split(' ').reverse().join(' ');
// '#launchschool #javascript it... of hang the get to Starting'

---

## Exercise 10
In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

'8' == 8;
'8' === 8;

## Solution
'8' == 8;   // true
'8' === 8;  // false

When operands are different types, equality operator (==) attempts to convert the operands to the same type. In the case of '8' == 8, the string '8' will be coerced into the number 8, returning true.

Strict equality operator (===) does not make any type conversions. So when operands of different types are compared, it will always return false.
