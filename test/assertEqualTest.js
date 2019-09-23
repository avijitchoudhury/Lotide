//test code
const assertEqual = require('../assertEqual')
const head = require('../head')

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Toronto", "Toronto");
assertEqual("Candy", "candy");


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");