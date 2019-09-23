//test code
// const assertEqual = require('../assertEqual')
const assert = require('chai').assert


describe('#assertEqual', () => {
  it('returns true if actual output is same as expected output', () => {
    assert.strictEqual("Lighthouse Labs", "Lighthouse Labs");
  })
  it('returns false for when the actual output does not match the expected output', () => {
    assert.notStrictEqual("lighthouse labs", "bootcamp");
  })
})

//Test for assertEqual.js
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Toronto", "Toronto");
// assertEqual("Candy", "candy");

//paired up with @nmehanma


