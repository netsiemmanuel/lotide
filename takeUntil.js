function findI(data,func){
  func(data[i]);
for(let i = 0; i < data.length; i++){
  if(func(data[i]) === true){
    console.log(i)
    return i;
  }
}
}
function takeUntil(data,func){
  let resultArr = []
  for(let i = 0; i < findI ; i++){
    resultArr.push(data[i])
    }
  }
// -------------TEST CODE------------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(findI)