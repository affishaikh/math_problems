const assert = require('assert');
const {createTriangularNumberGenerator, getAllFactors} = require('../src/problem12Lib.js');

describe('getNextTriangularNumber', function(){
    let getNextTriangularNumber = createTriangularNumberGenerator();
    it('should return 1', function(){
        assert.equal(getNextTriangularNumber(), 1);
    });
    it('should return 3', function(){
        assert.equal(getNextTriangularNumber(), 3);
    });
});