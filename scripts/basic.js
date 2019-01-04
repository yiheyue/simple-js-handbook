'use strict';
/* Strict mode was added in ES5 */

/* Variables */
// Declare a variable
var pen; // The value of pen is undefined

// Define a variable and initialize it
var message = 'Hello!';
var age = 18;
var isEmpty = true;

/* Data types */
/*
 * There are 7 data types in JavaScript.
 * undefined  null  boolean  number  string  object  symbol(new in ES6)
 */
/*
 * typeof keyword return value:
 *   undefined
 *   boolean
 *   string
 *   number
 *   object
 *   function
 */
console.log(typeof(15));
console.log(typeof(true));
console.log(typeof('hello'));

/* Convert data types */
// explicit
var num = 12;
console.log(typeof num); // number
num = String(num);
console.log(typeof num); // string

// implicit
'99' == 99;

/* Control flow */
// if-else
if (i > 10) {
  console.log('i is greater than 10.');
} else if (i < 0) {
  console.log('i is less than 0.');
} else {
  console.log('i is between 0 and 10.');
}

// do-while
do {
  i++;
} while (i < 10);

// while
while (i < 10) {
  i++;
}

// for
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// for-in
for (var prop in window) {
  console.log(prop);
}

// break-continue
for (var i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
} // 0 1 2

for (var i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
} // 0 1 2 4

// switch-case
switch (option) {
  case 1:
    console.log('Save file.');
    break;
  case 2:
    console.log('Exit.');
    break;
  default:
    console.log('Undefined option');
}

/* Functions */
function getBigOne(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
