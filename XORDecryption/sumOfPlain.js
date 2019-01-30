const fs = require('fs');
const cipherTextAsciis = JSON.parse(fs.readFileSync('./cipher.json'));

const keyAsciis = [103, 111, 100];
const plainTextAsciis = [];

const xor = function() {
  for (let i = 0, j = 0; i < cipherTextAsciis.length; i++, j = j % 3) {
    console.log(i, j);
    plainTextAsciis.push(cipherTextAsciis[i] ^ keyAsciis[j]);
    j++;
  }
};

xor();

const sum = plainTextAsciis.reduce((result, ascii) => result + ascii, 0);
const plainText = plainTextAsciis
  .map(ascii => String.fromCharCode(ascii))
  .join('');

console.log(plainText);
console.log(sum);
