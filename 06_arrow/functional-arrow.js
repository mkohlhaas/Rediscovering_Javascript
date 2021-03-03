'use strict';

const pickNamesInUpperCaseOfLength = function(names, length) {
  return names.filter((name) => name.length === length)
    .map((name) => name.toUpperCase())
    .join(', ');
};

const names = ['Paul', 'Sara', 'Bruce', 'Darla', 'Brad', 
  'Nancy', 'Mike', 'Susan'];

console.log(pickNamesInUpperCaseOfLength(names, 5));
