const isNumber = require('is-number');


console.log(isNumber(125)); // true
console.log(isNumber("125")); // true
console.log(isNumber("abc")); // false 
console.log(isNumber(null)); // false


const validator = require("validator")
console.log(validator.isEmail("test@test.com")); // true   
console.log(validator.isEmail("abcDE123")); // false