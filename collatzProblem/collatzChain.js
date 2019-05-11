const generateCollatzChain = function(number, accumulatedChains) {
  const chain = [];

  let candidateNumber = number;
  while (candidateNumber > 1) {
    chain.push(candidateNumber);
    if (candidateNumber % 2 === 0) {
      candidateNumber = candidateNumber / 2;
    } else {
      candidateNumber = 3 * candidateNumber + 1;
    }
    if (Object.keys(accumulatedChains).includes('' + candidateNumber)) {
      return { chain, foundNumbers: accumulatedChains[candidateNumber] };
    }
  }
  chain.push(1);
  return { chain, foundNumbers: 0 };
};

const findNumberOfTerms = function(lengthOfChain) {
  let numberOfTerms = lengthOfChain;
  return function(termsFoundSoFar, number) {
    termsFoundSoFar[number] = numberOfTerms;
    numberOfTerms--;
    return termsFoundSoFar;
  };
};

const mergeCollatzChain = function(number) {
  // const { chain, foundNumbers } = generateCollatzChain(number);
  let accumulatedChains = {};

  for (let traverser = number; traverser >= 1; traverser--) {
    if (!Object.keys(accumulatedChains).includes('' + traverser)) {
      const { chain, foundNumbers } = generateCollatzChain(
        traverser,
        accumulatedChains
      );
      accumulatedChains = chain.reduce(
        findNumberOfTerms(chain.length + foundNumbers),
        accumulatedChains
      );
    }
  }
  console.log(accumulatedChains);
};

mergeCollatzChain(+process.argv[2]);
