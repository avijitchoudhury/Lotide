//test code
const assertEqual = require('../assertEqual')
const head = require('../head')



//Test for assertEqual.js
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Toronto", "Toronto");
assertEqual("Candy", "candy");

//Test for head.js
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

