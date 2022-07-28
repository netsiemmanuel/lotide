const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
const findKeyByValue = function (obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
    
  }
};
// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);