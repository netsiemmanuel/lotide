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
//              CODE FOR eqObjects
const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  const arrKeys =[]
  arrKeys.push( Object.keys(obj1))
  arrKeys.push(Object.keys(obj2))
  for (let keys in arrKeys) {
  if (Array.isArray(obj1[keys]) || Array.isArray(obj2[keys])) {
    return eqArrays(obj1[keys], obj2[keys])
  }


  if (obj1[keys] !== obj2[keys]) {
  return false;
  }
   if (obj1[keys] === obj2[keys]){
    return true;
}
}
}   
 
//TEST CODE
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