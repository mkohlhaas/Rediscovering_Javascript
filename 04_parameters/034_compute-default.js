'use strict';
const computeTax = function(amount, 
  stateTax = 15, localTax = stateTax * .10) {
  console.log('stateTax: ' + ( amount * stateTax / 100 ) + ' localTax: ' + ( amount * localTax / 100 ));
};

computeTax(200, 10, 2);
computeTax(200, 10);
computeTax(200);
