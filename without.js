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

const without = function (source, itemsToRemove) {
  return source.filter(function (item) {
    for (var i = 0; i < itemsToRemove.length; i++){
      if (item === itemsToRemove[i]) {
        return false
      }
    } return true;
  })
}
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3, 4, 5], [1, 4]));
console.log(without(["lighthouse", "labs", "functions", "variables"], ["labs", "variables"]))
