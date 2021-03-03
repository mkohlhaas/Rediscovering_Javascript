'use strict';

const purchaseItems = function(essential1 = 'milk', 
  essential2 = 'bread', ...optionals) {
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};
              
const items = ['cheese', 'milk'];
purchaseItems('cheese'); //cheese, bread,
purchaseItems(...items); //cheese, milk,
purchaseItems(); //milk, bread,
