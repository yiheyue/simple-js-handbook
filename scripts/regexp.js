'use strict';

// RegExp syntax
var expression = /pattern/flags;

// The 'pattern' part: can be a simple or complex regular expression
var pattern1 = /cat/;    // for string 'cat'
var pattern2 = /ca[nt]/; // for string 'can' or 'cat'

// The 'flags' part
var pattern3 = /foo/g; // 'g' for 'global'
var pattern4 = /foo/i; // 'i' for 'case-insensitive'
var pattern5 = /foo/m; // 'm' for 'multiline'

// The meta characters in RegExp
/*
 * (  [  {  \  $  *  +
 * )  ]  }  ^  |  ?  .
 */

// RegExp attributes
var pattern6 = /foo\.txt/m;
pattern6.global;     // false
pattern6.ignoreCase; // false
pattern6.multiline;  // true

// RegExp methods
// 1. exec()
var message = 'Hello, my name is John!';
var pattern7 = /hello/i;
var match = pattern7.exec(message);

// 2. test()
var test = '0000-00-0000';
var pattern8 = /\d{4}-\d{2}-\d{4}/;
var result = pattern8.test(text);
