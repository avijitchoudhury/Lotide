//Test case for assertEqualsArray

const assertArrayEquals = require('../assertArrayEquals')

const middle = require('../middle')



assertArrayEquals([1, 2, 3], [1, 2, 3]); // => should PAS
assertArrayEquals([1, 2, 3], [1, 2, 3, 4]); // => should fail

assertArrayEquals(middle([]), []) // true
assertArrayEquals(middle([1, 2]), []) // true
assertArrayEquals(middle([1, 2, 3]), [2]) // true
assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]) // true
assertArrayEquals(middle([1, 2, 3, 4, 5]), [4]) // false
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [4]) // false