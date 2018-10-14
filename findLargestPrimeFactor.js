const isPrime = function(candidateNumber) {
  let result = true;
  let divisor = 2;
  while(divisor <= Math.sqrt(candidateNumber)) {
    if(candidateNumber%divisor == 0) {
      result = false;
      return result;
    }
    divisor++;
  }
  return result;
}

const isDivisible = function(candidatePrimeNumber, divisor) {
  let result = (candidatePrimeNumber % divisor == 0);
  return result;
}

const findLargestPrimeFactor = function(candidateNumber) {
  let largestPrimeFactor;
  let remainder;
  if(isPrime(candidateNumber)) {
    return candidateNumber;
  }
  for(let divisor = 2; divisor <= Math.floor(candidateNumber/2); divisor++) {
    let isDivisibleByDivisor = false;
    isDivisibleByDivisor = isDivisible(candidateNumber, divisor);
    if(isDivisibleByDivisor) {
      remainder = candidateNumber/divisor;
    }
    if(isDivisibleByDivisor && isPrime(remainder)) {
      return remainder;
    }
  }
  return 0;
}
exports.findLargestPrimeFactor = findLargestPrimeFactor;
