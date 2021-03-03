'use strict';

const max = function(...values) {
  return values.reduce((large, e) => large > e ? large : e, values[0]);
};
  
console.log(max(2, 1, 7, 4));
