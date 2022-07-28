const assertEqual = function(actual, expected) {
  if (actual === expected ){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
const countLetters = function(string){
  
  const returned = {}
  for(let letters of string){
    if (letters !== " "){
      if(returned[letters] === undefined){
        returned[letters] = 1
        
      }
      else{
        returned[letters]++
      }
    
    }
  }
  return returned;
}
console.log(countLetters("lighthouse in the house"));