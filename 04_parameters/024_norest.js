'use strict';

const names1 = ['Laurel', 'Hardy', 'Todd'];
const names2 = ['Rock'];
  
const sayHello = function(name1, name2) {
  console.log('hello ' + name1 + ' and ' + name2);
};       

sayHello(...names1);
sayHello(...names2);
