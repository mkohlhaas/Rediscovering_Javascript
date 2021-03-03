'use strict';

const greet = function(...names) {
  console.log(this + ' ' + names.join(', '));
};

const helloJackJill = greet.bind('hello', 'Jack', 'Jill');

helloJackJill(); //hello Jack, Jill
