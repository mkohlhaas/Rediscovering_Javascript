'use strict';
const greet = function(message, name) {
  console.log(message + ' ' + name);
};

const sayHi = greet.bind(null, 'hi');

sayHi('Joe');
