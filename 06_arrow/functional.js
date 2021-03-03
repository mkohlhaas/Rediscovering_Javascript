'use strict';

const pickNamesInUpperCaseOfLength = function(names, length) {
  return names.filter(function(name) { return name.length === length; })
    .map(function(name) { return name.toUpperCase(); })
    .join(', ');
};

const names = ['Paul', 'Sara', 'Bruce', 'Darla', 'Brad', 
  'Nancy', 'Mike', 'Susan'];

console.log(pickNamesInUpperCaseOfLength(names, 5));
