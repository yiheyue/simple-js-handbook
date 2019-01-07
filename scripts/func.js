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

// Set the default value of parameter
// 1
function printABC(a = 1, b = -1, c = 0) {
  console.log(a, b, c);
}
// 2
function printDEF(d, e, f) {
  if (d === undefined) {
    d = 1;
  }
  if (e === undefined) {
    e = -1;
  }
  if (f === undefined) {
    f = 0;
  }
  console.log(d, e, f);
}
// 3
function printGHI(g, h, i) {
  g = g || 1;
  h = h || -1;
  i = i || 0;
  console.log(g, h, i);
}

// Function declaration, Function expression, Arrow function
function doSomething() {
  console.log("declaration");
}

let doSomething = function() {
  console.log("expression");
};

let doSomething = () => {
  console.log("arrow");
};
