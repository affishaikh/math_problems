const calculateMultiplication = function(candidateDigitsStr) {
  let candidateDigitsArray = candidateDigitsStr.split('');
  let result = 1;
  for(let index = 0; index < candidateDigitsArray.length; index++) {
    result = result * candidateDigitsArray[index];
  }
  return result;
}
exports.findHighestMultiple = function(candidateNumberStr) {
  let result = 0;
  let numberOfAdjacentDigits = 13;
  for(let index = 0; index <=candidateNumberStr.length - numberOfAdjacentDigits; index++) { 
    let multiplication = calculateMultiplication(candidateNumberStr.slice(index, index + numberOfAdjacentDigits));
    if(result < multiplication) {
      result = multiplication;
    }
  }
  return result;
}
