const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

let eqArrays = function (arrayOne, arrayTwo) {
  if(arrayOne.length !== arrayTwo.length){
    return false
  }

  for(var i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    } 
  } 
    return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PAS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PAS