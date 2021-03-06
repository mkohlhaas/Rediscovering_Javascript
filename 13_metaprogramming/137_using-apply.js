'use strict';

const greet = function(msg, name) { 
  const pleasantry = typeof(this) === 'string' ? this : 'have a nice day';
  console.log(`${msg} ${name}, ${pleasantry}`);
};

greet('Howdy', 'Jane');
greet.call('how are you?', 'Howdy', 'Jane');
greet.apply('how are you?', ['Howdy', 'Jane']);

// If a context object needs to be passed in, Reflect’s apply() function is now
// the preferred alternative to using call() or apply() directly on the
// function.
Reflect.apply(greet, 'how are you?', ['Howdy', 'Jane']);
