
function tail(arr){
  let arr2 = [];
  for(i = 1; i < arr.length; i++){
    arr2.push(arr[i]);
  }
  return arr2;
};

module.exports = tail;

