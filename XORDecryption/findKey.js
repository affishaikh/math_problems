const fs = require('fs');
const plainTextAlphabets =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const plainTextAsciis = plainTextAlphabets
  .split('')
  .map(element => element.charCodeAt());

const keyAsciis = plainTextAsciis.slice(26);

const cipherTextAsciis = JSON.parse(fs.readFileSync('cipher.json'));

const findNthKeyLetter = function(nthPosition) {
  const nthCipherAsciis = [];
  for (
    let traverser = nthPosition;
    traverser < cipherTextAsciis.length;
    traverser += 3
  ) {
    nthCipherAsciis.push(cipherTextAsciis[traverser]);
  }

  let candidateAsciis = [...keyAsciis];
  let nthCipherAsciisTraverser = 0;
  while (
    !(candidateAsciis.length === 1) ||
    !(nthCipherAsciisTraverser < nthCipherAsciis.length)
  ) {
    let newCandidateAsciis = candidateAsciis.filter(ascii => {
      return plainTextAsciis.includes(
        ascii ^ nthCipherAsciis[nthCipherAsciisTraverser]
      );
    });
    if (newCandidateAsciis.length === 0) {
      newCandidateAsciis = candidateAsciis.slice(0);
    }
    candidateAsciis = newCandidateAsciis.slice(0);
    nthCipherAsciisTraverser++;
  }
  return candidateAsciis;
};

console.log(findNthKeyLetter(5));
