'use strict';

// Define a function
function funcNameA() {
  console.log('AAA');
  return 23;
}

var funcNameB = function() {
  console.log('BBB');
};

var funcNameC = function funcNameD() {
  console.log('CCC');
};

funcNameA(); // AAA
funcNameB(); // BBB
funcNameC(); // CCC
funcNameD(); // ERROR: funcNameD is not defined

console.log(funcNameA); // [Function: funcNameA]
console.log(funcNameA()); // AAA 23
