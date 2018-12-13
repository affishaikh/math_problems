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

describe('getAllFactors', function(){
    it('should return an array of all factors of 21', function(){
        let expectedOutput = [1,21,7,3];
        let actualOutput = getAllFactors(21);
        assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return an array of all factors of 28', function(){
        let expectedOutput = [1,28,14,2,7,4];
        let actualOutput = getAllFactors(28);
        assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return an array of all factors of 36', function(){
        let expectedOutput = [1,36,18,2,12,3,9,4,6];
        let actualOutput = getAllFactors(36);
        assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return an array of all factors of 1', function(){
        let expectedOutput = [1,1];
        let actualOutput = getAllFactors(1);
        assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return an array of all factors of 3', function(){
        let expectedOutput = [1,3];
        let actualOutput = getAllFactors(3);
        assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return an array of all factors of 6', function(){
        let expectedOutput = [1,6,3,2];
        let actualOutput = getAllFactors(6);
        assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return an array of all factors of 10', function(){
        let expectedOutput = [1,10, 5, 2];
        let actualOutput = getAllFactors(10);
        assert.deepEqual(actualOutput, expectedOutput);
    });
});