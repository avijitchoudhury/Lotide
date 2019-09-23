const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ['ground', 'control', 'to', 'major', 'tom'];
const wordsTwo = ['hello', 'my', 'name', 'is', 'avijit'];
const numThree = ['lighthouse', 'labs', 'is', 'in', 'the', 'house']

const results1 = map(words, word => word[0]);
// console.log(results1);
const results2 = map(wordsTwo, word => word[1])
// console.log(results2);
const results3 = map(numThree, num => num.length)
// console.log(results3)

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

// assertArrayEquals(results1, ['g', 'c', 't', 'm', 't']);//True
// assertArrayEquals(results2, ['g', 'c', 't', 'm', 't']);//Fail
// assertArrayEquals(results3, [10, 4, 2, 2, 3, 5]);

