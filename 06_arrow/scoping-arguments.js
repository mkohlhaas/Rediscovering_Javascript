'use strict';

{
  const create = function(message) {
    console.log('First argument for create: ' + arguments[0]); 
    return function() { 
      console.log('First argument seen by greet: ' + arguments[0]);  
    };
  };

  const greet = create('some value');
  greet('hi');
}

{
  const create = function(message) {
    console.log('First argument for create: ' + arguments[0]);
    return () => console.log('First argument seen by greet: ' + arguments[0]);  
  };

  const greet = create('some value');
  greet('hi');
}
