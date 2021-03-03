'use strict';

const purchaseItems = function(essential1, essential2, ...optionals) {
  console.log(`${essential1}, ${essential2}, ${optionals.join(', ')}`);
};

const mustHaves = ['bread', 'milk'];
const also = ['eggs', 'donuts'];
const andAlso = ['juice', 'tea'];

//call purchaseItems so it prints 
//bread, milk, eggs, donuts, coffee, juice, tea
purchaseItems(...mustHaves, ...[...also, 'coffee', ...andAlso]);
