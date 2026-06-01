const add = function(a,b) {
  return parseInt(a) + parseInt(b);
	
};

const subtract = function(a,b) {
  return parseInt(a) - parseInt(b);
	
};

const sum = function(array) {
  return array.reduce((total, currentNumber) => total + currentNumber,
  0);
};

const multiply = function(array) {
  return array.reduce((total, currentNumber) => total * currentNumber,
  1);

};

const power = function(b, e) {
  return b ** e;
	
};

const factorial = function(n) {
  if (n <= 1) return 1;
  return n * factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
