const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));// => true
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false  