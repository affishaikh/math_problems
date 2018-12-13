const createTriangularNumberGenerator = function() {
    let naturalNumberToBeAdded = 1;
    let triangularNumber = 0;
    return function() {
        triangularNumber =  triangularNumber + naturalNumberToBeAdded;
        naturalNumberToBeAdded++;
        return triangularNumber;
    }
}

module.exports = { createTriangularNumberGenerator };