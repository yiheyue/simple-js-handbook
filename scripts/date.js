'use strict';

// Get the current date
var now = new Date();

// Get a date which user set
var date = new Date(1000000);

// Get the execution time
var start = Date.now();
dosomething();
var end = Date.now();
var time = end - start;
