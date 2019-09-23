// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };

//Test code
const assertEqual = require('./assertEqual')

const tail = function (objectOne) {
  let mainTail = objectOne.slice(1);
  return mainTail
}

module.exports = tail;