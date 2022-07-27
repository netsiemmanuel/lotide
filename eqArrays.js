const assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
function eqArrays(arr1,arr2){
  let val1 = arr1.join();
  let val2 = arr2.join();
  if (val1 === val2){
    return true;
  }
  return false;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))// => false