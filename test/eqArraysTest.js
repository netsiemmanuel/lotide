//-----------TEST CODE---------
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(true, eqArrays([1, 2, 3], [1, 2, 3]))// => true
assertEqual(false, eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertEqual(true, eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(false, eqArrays(["1", "2", "3"], ["1", "2", 3]))// => false