
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🙂  Assertion Passed: ${ actual } === ${ expected }`);
  } else {
    console.log(`😔  Assertion Failed: ${ actual } !===  ${ expected }`);
  }
};
const isArrayTrue = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    }
  }
  return true;
}
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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false