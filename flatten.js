let eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }

  for (var i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    }
  }
  return true
}

const assertArrayEquals = function (arrayOne, arrayTwo) {
  let assertion = eqArrays(arrayOne, arrayTwo);
  if (assertion) {
    console.log(`Great job! It works!`)
  } else {
    console.log(`Unfortunately it is a fail!`)
  }
}

const flatten = function (array) {
  var merged = [].concat.apply([], array)
  return merged;
}

// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, [3, 4], [4, 6, 8], 9, 10]))