const eqObjects = function (object1, object2) {
  let objOne = Object.keys(object1)
  let objTwo = Object.keys(object2)
  if (objOne.length != objTwo.length) {
    return false;
  }
  for (const key of objOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (isArrayTrue(object1[key], object2[key]) === false) {
        return false
      }
    } else {
      if (object1[key] != object2[key]) {
        return false
      }
    }
  }
  return true
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Pass: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);