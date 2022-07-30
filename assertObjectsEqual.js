function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {

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
const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  const arrKeysOne = Object.keys(obj1)
  for (let keys of arrKeysOne) {
    if (Array.isArray(obj1[keys])) {
      return eqArrays(obj1[keys, obj2[keys]])
    }
    else {
      if (obj1[keys] !== obj2[keys]) {
        return false;
      }
    }
    return true;
  }
}
function assertObjectsEqual(obj1,obj2){
  if(eqObjects(obj1,obj2) === true){
    console.log(`✅✅✅ Assertion Passed: ${obj1} === ${obj2}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${obj1} !== ${obj2}`);
};
//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true