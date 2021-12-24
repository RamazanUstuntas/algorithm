// ------ for require type method -----

/* const circleFunctions = require ("./circle");

circleFunctions.circleArea(5);
circleFunctions.circleCircumference(5); */

// ------ for require + object destructing type method -------

const {circleArea, circleCircumference} = require ("./circle");

circleArea(5);
circleCircumference(5);