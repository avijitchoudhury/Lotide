// let eqArrays = function (arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false
//   }

//   for (var i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false
//     }
//   }
//   return true
// }

// const assertArrayEquals = function (arrayOne, arrayTwo) {
//   let assertion = eqArrays(arrayOne, arrayTwo);
//   if (assertion) {
//     console.log(`Great job! It works!`)
//   } else {
//     console.log(`Unfortunately it is a fail!`)
//   }
// }
const assertArrayEquals = require('./assertArrayEquals');



const middle = function (array) {
let middleArray = Math.floor(array.length/2)
  if(array.length <= 2){
    return []
  } else if (array.length % 2 === 1){
    return [array[Math.floor(array.length/2)]]
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[array.length / 2]]
}
}

module.exports = middle;



// console.log(middle([]))
// console.log(middle([1, 2]))
// assertArrayEquals(middle([1, 2, 3]), [2])
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5]))
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
