'use strict';

let factor = 2;

let product = function(number) {
  return number * factor;
};

factor = 0;

console.log(product(4));
