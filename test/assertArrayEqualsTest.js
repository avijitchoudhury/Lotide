//Test case for assertEqualsArray

const assertArrayEquals = require('../assertArrayEquals')



assertArrayEquals([1, 2, 3], [1, 2, 3]); // => should PAS
assertArrayEquals([1, 2, 3], [1, 2, 3, 4]); // => should PAS
