'use strict';

const greet = function(msg, name) { 
  const pleasantry = typeof(this) === 'string' ? this : 'have a nice day';
  console.log(`${msg} ${name}, ${pleasantry}`);
};

greet('Howdy', 'Jane');
greet.call('how are you?', 'Howdy', 'Jane');
greet.apply('how are you?', ['Howdy', 'Jane']);

Reflect.apply(greet, 'how are you?', ['Howdy', 'Jane']);
