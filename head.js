const assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
function head(arr){
  let val = arr[0];
  
  return val;
}

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");