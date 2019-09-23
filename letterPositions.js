const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

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



const letterPositions = function (sentence) {
  const results = {};
  let indexOfCharacter = 0;

  for (const letter of sentence) {
    if(letter !== " "){
      if (results[letter]){
        results[letter].push(indexOfCharacter);
      } else {
        results[letter] = [indexOfCharacter];
      }
      indexOfCharacter += 1;
     } 
    }
    return results
  }


// console.log(letterPositions('lighthouse in the house'))
// console.log(letterPositions('hello'))
