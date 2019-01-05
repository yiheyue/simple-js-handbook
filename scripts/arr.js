'use strict';

/* Create an array */
var scores = [ 98, 83, 79, 90 ];
var names = [ 'Jone', 'Ken', 'Dan' ];

/* Access array item */
scores[2]; // 79
names[0]; // "Jone"

/* Loop array */
names.forEach(function(name, index, array) {
  console.log(name, index, array);
});

/* Add to the end of an array */
names.push('James');

/* Remove from the end of an array*/
names.pop();

/* Remove from the front of an array */
names.shift();

/* Add to the front of an array */
names.unshift('Tim');

/* Find an item */
names.indexOf('Dan');

/* Remove items from an index position */
var origin = [ 'a', 'b', 'c', 'd', 'e' ];
var index = 1;
var number = 2;
var removed = origin.splice(index, number);

/* Copy an array */
var shallowCopy = names.slice();
