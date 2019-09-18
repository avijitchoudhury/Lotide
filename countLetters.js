const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = function (string) {
  const results = {};
  const stringWithoutSpace = string.replace(/\s+/g, '');  
  for (const items of stringWithoutSpace) {
      if (results[items]) {
        results[items] += 1;
      } else {
        results[items] = 1;
      }
    }
  return results;
}

console.log(countLetters("lighthouse in the house"));

