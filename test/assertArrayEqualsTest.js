//Test case for assertEqualsArray

const assertArrayEquals = require('../assertArrayEquals')

const middle = require('../middle')



assertArrayEquals([1, 2, 3], [1, 2, 3]); // => should PAS
assertArrayEquals([1, 2, 3], [1, 2, 3, 4]); // => should PAS

console.log(middle([]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]