'use strict';

const product = function(first, second = 1, ...moreValues) {
  console.log(first + ', ' + second + ', length:' + moreValues.length);
};

product(10, 20, 30, 40, 50);
product(10, 20);
product(10);
product(10, undefined, 4, 5); //smelly
product(...[21, 22, 23, 24]);
