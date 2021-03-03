'use strict';

const numbers = [1, 5, 2, 6, 8, 3, 4, 9, 7, 6];

console.log(
  numbers.filter(e => e % 2 === 0)
    .map(e => e * 2)
    .reduce((total, e) => total + e));
