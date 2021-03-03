'use strict';

const greet = (message, ...names) => 
  console.log(message + ' ' + names.join(', '));

const helloJackJill = greet.bind(null, 'hello', 'Jack', 'Jill');

helloJackJill(); //hello Jack, Jill
