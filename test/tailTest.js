// const assertEqual = require('../assertEqual')
const assert = require('chai').assert;
const tail = require('../tail')


describe('#tail', () => {
  it('returns true when the actual output matches the expected output', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]) ,  ["Lighthouse", "Labs"])
  });
  it('returns  false when the actual output does not match the expected output', () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"])
  })
})






//Test for tail.js

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// assertEqual(result[1], "Avijit")


//paired up with @nmehanma