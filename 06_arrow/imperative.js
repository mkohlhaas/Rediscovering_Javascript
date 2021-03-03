'use strict';

const pickNamesInUpperCaseOfLength = function(names, length) {
  let result = '';

  for(let i = 0; i < names.length; i++) {
    if(names[i].length === length) {
      result += names[i].toUpperCase() + ', ';
    }
  }

  return result.substring(0, result.length - 2);                      
};

const names = ['Paul', 'Sara', 'Bruce', 'Darla', 'Brad', 
  'Nancy', 'Mike', 'Susan'];

console.log(pickNamesInUpperCaseOfLength(names, 5));
