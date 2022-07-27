
function eqArrays(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {

      if (typeof arr1[i] !== typeof arr2[j]) {
        return false;
        process.exit();
      }
    }
  }
  let val1 = arr1.join();
  let val2 = arr2.join();
  if (val1 === val2) {
    return true;
  }
  return false;

};
function assertArraysEqual(arr1,arr2){
  if(eqArrays(arr1,arr2) === true){
    console.log(`✅✅✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};
  assertArraysEqual([1,2,3],['1',2,3]);
