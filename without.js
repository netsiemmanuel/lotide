function without(source,itemsToRemove){
  let results = [];
  for(let i =0; i < source.length; i++){
    if((itemsToRemove.includes(source[i])) === false){
    results.push(source[i])

    }
     /* if(arr1[i] !== itemsToRemove[j]){
        results.push(arr1[i]);
      }*/
    
  }
  return results;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]