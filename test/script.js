const operations = require("../index");
const { add, subtract, multiply, divide } = operations;

console.log('Addition:', add(5, 3)); 
console.log('Subtraction:', subtract(10, 4)); 
console.log('Multiplication:', multiply(6, 7)); 
console.log('Division:', divide(15, 3)); 
console.log('Division by zero:', divide(10, 0)); 
