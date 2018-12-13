const createTriangularNumberGenerator = function() {
    let naturalNumberToBeAdded = 1;
    let triangularNumber = 0;
    return function() {
        triangularNumber =  triangularNumber + naturalNumberToBeAdded;
        naturalNumberToBeAdded++;
        return triangularNumber;
    }
}

const isAnyMoreFactorRemaining = function(factors, divisor) {
    return !factors.includes(divisor);
}

const isDivisble = function(candidateNumber, divisor) {
    return candidateNumber%divisor === 0
}

const getAllFactors = function(candidateNumber) {
    let result = [];
    result.push(1, candidateNumber);
    let reducingNumber = 1;
    let isCandidateNumberOdd = !isDivisble(candidateNumber, 2);
    if(isCandidateNumberOdd) {
        reducingNumber = 2;
    }
    let divisor = Math.floor(candidateNumber/2);
    if(isCandidateNumberOdd && isDivisble(divisor, 2)) {
        divisor--;
    }

    while(isAnyMoreFactorRemaining(result, divisor) && divisor > 0) {
        if(isDivisble(candidateNumber, divisor) ) {
            result.push(divisor);
            if(divisor !== candidateNumber/divisor) {
                result.push(candidateNumber/divisor);
            }
        }
        divisor = divisor - reducingNumber;
    }
    return result;
}

const getNumber = function(requiredNumberOfFactors) {
    let getNextTriangularNumber = createTriangularNumberGenerator();
    let triangularNumber;
    let isNumberFound = false
    while(!isNumberFound) {
        triangularNumber = getNextTriangularNumber();
        console.log(triangularNumber);
        let factors = getAllFactors(triangularNumber);
        isNumberFound = factors.length >= requiredNumberOfFactors;
    }
    return triangularNumber;
}

console.log(getAllFactors(2116085));

module.exports = { createTriangularNumberGenerator, getAllFactors, getNumber };
