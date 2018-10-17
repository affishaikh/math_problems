const isDivisible = function(candidateNumber, divisor) {
  let result = (candidateNumber % divisor == 0);
  return result;
}

const main = function() {
  let candidateNumber = 20;
  let numberFound = false;
  while(!numberFound) {
    isDivisibleBy3 = isDivisible(candidateNumber, 3);
    isDivisibleBy4 = isDivisible(candidateNumber, 4);
    isDivisibleBy7 = isDivisible(candidateNumber, 7);
    isDivisibleBy8 = isDivisible(candidateNumber, 8);
    isDivisibleBy9 = isDivisible(candidateNumber, 9);
    isDivisibleBy11 = isDivisible(candidateNumber, 11);
    isDivisibleBy13 = isDivisible(candidateNumber, 13);
    isDivisibleBy16 = isDivisible(candidateNumber, 16);
    isDivisibleBy17 = isDivisible(candidateNumber, 17);
    isDivisibleBy19 = isDivisible(candidateNumber, 19);
    if(isDivisibleBy3 && isDivisibleBy4 && isDivisibleBy7 && isDivisibleBy8 && isDivisibleBy9 && isDivisibleBy11 
       && isDivisibleBy13 && isDivisibleBy16 && isDivisibleBy17 && isDivisibleBy19) {
      numberFound = true;
      return candidateNumber;
    }
    candidateNumber = candidateNumber + 10;
  }
}

console.log(main());
