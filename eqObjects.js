
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

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

const eqObjects = function (object1, object2) {
  let obj1 = Object.keys(object1) // returns an array
  let obj2 = Object.keys(object2) // returns an array
  //check to see if the length of the 2 obj arrays are the same
  if(obj1.length !== obj2.length){
    return false
  } 
  for (let item of obj1) {
    if(obj1[item] !== obj2[item]) {       //Checking to see if the index value of obj1 & obj2 are the same
      return false
    } if(eqArrays(object1[item], object2[item]) !== true){ //check to see if arrays are the same length
      return false;
    } 
  } return true;
}








// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), true);