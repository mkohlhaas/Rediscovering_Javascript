'use strict';

const placeOrder = function(
  id, amount, 
  shipping = (amount < 20 ? 5 : 10), 
  date = new Date()) {
  console.log(' shipping charge:$' + shipping + ' Date:' + date.getDate());
};
                         
placeOrder(1, 12.10, undefined, new Date('05/15/2018'));
