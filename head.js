const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const head = function(index) {
  let item = index[0];
  return item
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");