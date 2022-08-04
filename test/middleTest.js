//-----------TEST CODE----------
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
assertArraysEqual([3], middle([1, 2, 3, 4, 5,])); // => [3])
assertArraysEqual([2, 3], middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6])); // => [3, 4]