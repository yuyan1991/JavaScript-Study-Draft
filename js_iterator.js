'use strict';

var m = new Map([[0, 'AA'], [1, 'BB'], [2, 'CC']]);
var s = new Set(["A", 'B', 'C']);
var a = ['A', 'B', 'C'];

for (let x of a) console.log(x);
for (let x of s) console.log(x);
for (let x of m) console.log(x);

a.forEach(function(element, index, array) {
	console.log(element, "index = ", index);
});

a.forEach(function(element) {
	console.log(element);
});

s.forEach(function(element, set) {
	console.log(element);
});

m.forEach(function(value, key, map) {
	console.log("key = ", key, "value = ", value);
});

m.forEach(function (va1, k1, map) {
	console.log("key = ", k1, "value = ", va1);
});

m.forEach(function(key, value, map) {
    console.log("key = ", key, "value = ", value);
});

m.forEach(function(abc, def, map) {
    console.log("abc = ", abc, "def = ", def);
});