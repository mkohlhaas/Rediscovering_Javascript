'use strict';

Object.defineProperties(Number.prototype, {
  integerPart: {
    get: function() {
      return this.toString().split('.')[0];
    }
  },
  fractionalPart: {
    get: function() { return this.toString().split('.')[1] || 0; }
  }
});                            


const printParts = function(number) {
  console.log(
    `whole: ${number.integerPart} decimal: ${number.fractionalPart}`);
};

printParts(22.12);    //whole: 22 decimal: 12
printParts(.14);      //whole: 0 decimal: 14
printParts(-23.19);   //whole: -23 decimal: 19
printParts(42);       //whole: 42 decimal: 0
