const assert = require('assert');
const lib = require('./findHighestMultipleLib.js');

assert.equal(lib.findHighestMultiple('9899'), 5832);
assert.equal(lib.findHighestMultiple('1984571'), 1440);
assert.equal(lib.findHighestMultiple('4573697'), 1134);
let candidateNumber = '82166370484403199890008895243450658541227588666881';
assert.equal(lib.findHighestMultiple(candidateNumber), 5832);
