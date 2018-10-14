const assert = require("assert");
const lib = require('./findLargestPrimeFactor.js');

assert.equal(lib.findLargestPrimeFactor(4),2);
assert.equal(lib.findLargestPrimeFactor(6),3);
assert.equal(lib.isPrime(9),false);
assert.equal(lib.isPrime(11),true);
assert.equal(lib.isPrime(2),true);
assert.equal(lib.isPrime(10),false);
assert.equal(lib.isPrime(3),true);
assert.equal(lib.isPrime(121),false);
assert.equal(lib.isPrime(104743),true);
assert.equal(lib.isDivisible(42,2), true);
assert.equal(lib.isDivisible(81,9), true);
