const createTriangularNumberGenerator = function () {
  let naturalNumberToBeAdded = 1;
  let triangularNumber = 0;
  return function () {
    triangularNumber = triangularNumber + naturalNumberToBeAdded;
    naturalNumberToBeAdded++;
    return triangularNumber;
  };
};

const isDivisble = function (candidateNumber, divisor) {
  return candidateNumber % divisor === 0;
};

const isOdd = number => number % 2 === 1;

const isPerfectSquare = number => {
  let sqrt = Math.sqrt(number);
  return Math.floor(sqrt) === sqrt;
};

const getNumberOfFactors = function (candidateNumber) {
  let result = 2;
  let increment = 1;
  let divisor = 2;
  if (isOdd(candidateNumber)) {
    increment = 2;
    divisor = 3;
  }

  while (divisor < Math.sqrt(candidateNumber)) {
    if (isDivisble(candidateNumber, divisor)) {
      result = result + 2;
    }
    divisor = divisor + increment;
  }

  if (isPerfectSquare(candidateNumber)) {
    result++;
  }
  return result;
};

const getNumber = function (requiredNumberOfFactors) {
  let getNextTriangularNumber = createTriangularNumberGenerator();
  let triangularNumber;
  let isNumberFound = false;
  while (!isNumberFound) {
    triangularNumber = getNextTriangularNumber();
    let numberOfFactors = getNumberOfFactors(triangularNumber);
    isNumberFound = numberOfFactors >= requiredNumberOfFactors;
  }
  return triangularNumber;
};

module.exports = {
  createTriangularNumberGenerator,
  getNumberOfFactors,
  getNumber
};
