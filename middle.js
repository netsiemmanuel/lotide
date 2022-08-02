

const middle = function(array){
  let result = [];
  if (array.length< 3){
    return result;
    process.exit()
  }
  if (array.length % 2 !== 0){
    result.push(array[Math.floor((array.length / 2))])
    return result;
  }
  return array.slice(((array.length/2)-1),((array.length/2)+1))
};
module.exports = middle;
