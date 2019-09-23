// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };

const assertEqual = require('./assertEqual')

const head = function(index) {
  let item = index[0];
  return item
}

module.exports = head;