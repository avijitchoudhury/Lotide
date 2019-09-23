const takeUntil = function(array, callback){
  let result = []
  for( let i = 0; i < array.length; i++){
    if (callback(array[i])) {
      return result
    }
      result.push(array[i])
  } 
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

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

// assertArrayEquals(results1, [1, 2, 5, 7, 2])//true
// assertArrayEquals(results2, ['Ive', 'been', 'to', 'hollywood']) //false