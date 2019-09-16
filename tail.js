const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const tail = function (objectOne) {
  let mainTail = objectOne.slice(1);
  return mainTail
}

const result = tail(["Hello", "Lighthouse", "Labs", "Avijit", "School"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[1], "Avijit")