
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
module.exports = eqArrays; 




