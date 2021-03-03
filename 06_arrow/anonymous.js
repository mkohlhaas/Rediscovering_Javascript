'use strict';

const factorial = function(number) {
  let product = 1;
  
  for(let i = 1; i <= number; i++) {
    product *= i;
  }
  
  return product;
};

console.log(factorial(5));
