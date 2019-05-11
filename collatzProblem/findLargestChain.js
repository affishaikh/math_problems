const findNumberOfTerms = function(number) {
  let numberOfTerms = 0;
  let candidateNumber = number;
  while (candidateNumber > 1) {
    let reduced = 3 * candidateNumber + 1;
    if (candidateNumber % 2 === 0) {
      reduced = candidateNumber / 2;
    }
    candidateNumber = reduced;
    numberOfTerms++;
  }
  numberOfTerms++;
  return numberOfTerms;
};

const findLargest = function() {
  let largest = 1000000;
  let numberOfTerms = 153;
  for (let traverser = largest - 1; traverser > 1; traverser--) {
    let newNumberOfTerms = findNumberOfTerms(traverser);
    if (newNumberOfTerms > numberOfTerms) {
      largest = traverser;
      numberOfTerms = newNumberOfTerms;
    }
  }
  console.log(largest, numberOfTerms);
};

findLargest();
