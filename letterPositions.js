const letterPositions = function (string) {
  const returned = {}
  const n = string.length;
  for (let i = 0; i < n; i++) {
    if (string[i] !== " ") {
      if (returned[string[i]] === undefined) {
        returned[string[i]] = [i]
      }
      else{returned[string[i]].push(i)
      }


    }

  }
  return returned;
}

console.log(letterPositions("hello world!"))