const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Pass: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  
  for (const items of allItems) {
    if(itemsToCount[items]){
      if (results[items]) {   
        results[items] += 1;
      } else {
      results[items] = 1;
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);