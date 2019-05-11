const fs = require('fs');
const keys = fs.readFileSync('./keylog.txt', 'utf8').split('\n');

const uniqueKeys = keys;
const uniqueKeys = keys.reduce((unique, key) => {
  if (!unique.includes(key)) {
    unique.push(key);
  }
  return unique;
}, []);

console.log(uniqueKeys);

const canAttachToPasscode = function(passcode, candidateNumber) {
  if (passcode.slice(1) === candidateNumber.slice(0, 2)) {
    return { canAttach: true, position: 1, index: 2 };
  }
  if (passcode.slice(0, 2) === candidateNumber.slice(1)) {
    return { canAttach: true, position: 0, index: 1 };
  }
  if (passcode.slice(2) === candidateNumber.slice(0, 1)) {
    return { canAttach: true, position: 1, index: 1 };
  }
  if (passcode.slice(0, 1) === candidateNumber.slice(2)) {
    return { canAttach: true, position: 0, index: 2 };
  }
  return false;
};

const connect = function(passcode, candidateNumber, attachInfo) {
  if (attachInfo.postion) {
    return passcode + candidateNumber.slice(attachInfo.index);
  }
  return candidateNumber.slice(0, attachInfo.index) + passcode;
};

const passcodeFinder = function(initialPasscode, uniqueKeys) {
  let passcode = initialPasscode;
  for (let traverser = 0; traverser < uniqueKeys.length; traverser++) {
    const attachInfo = canAttachToPasscode(passcode, uniqueKeys[traverser]);
    if (attachInfo.canAttach) {
      passcode = connect(
        passcode,
        uniqueKeys[traverser],
        attachInfo
      );
      uniqueKeys.copyWithin(traverser, traverser + 1);
      uniqueKeys.pop();
      passcodeFinder(passcode, uniqueKeys);
    }
  }
  return { passcode, uniqueKeys };
};

const findPasscode = function(uniqueKeys) {
  const passcodes = [];
  for (let traverser = 0; traverser < uniqueKeys.length; traverser++) {
    let passcode = uniqueKeys.shift();
    const rawPasscode = passcodeFinder(passcode, uniqueKeys.slice());
    passcodes.push(rawPasscode.passcode);
  }
  return passcodes;
};

console.log(findPasscode(uniqueKeys).join(''));
