const assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
function tail(arr){
  let arr2 = [];
  for(i = 1; i < arr.length; i++){
    arr2.push(arr[i]);
  }
  return arr2;
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

