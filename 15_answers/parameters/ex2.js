'use strict';

const purchaseItems = function(essential1, essential2, ...optionals) {
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));  
};

purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];
                              
//call purchaseItems so it prints bread, milk, eggs, donuts, tea
purchaseItems(...mustHaves, ...andAlso);
