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
  if (assertion){
    console.log(`Great job! It works!`)
  } else {
    console.log(`Unfortunately it is a fail!`)
  }
}

assertArrayEquals([1, 2, 3], [1, 2, 3]); // => should PAS
assertArrayEquals([1, 2, 3], [1, 2, 3, 4]); // => should PAS


