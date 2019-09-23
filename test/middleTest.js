const assert = require('chai').assert;
const middle = require('../middle');


describe('#tail', () => {
  it('returns the middle index when an array as ODD number and the 2 middle index as EVEN number of indexes', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
})




// assertArrayEquals(middle([]), []) // true
// assertArrayEquals(middle([1, 2]), []) // true
// assertArrayEquals(middle([1, 2, 3]), [2]) // true
// assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]) // true
// assertArrayEquals(middle([1, 2, 3, 4, 5]), [4]) // false
// assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [4]) // false