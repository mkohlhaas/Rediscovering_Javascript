'use strict';

const greet = function(message, name) {
  return `${message} ${name}!`;
};

const invokeGreet = function(func, name) {
  console.log(func('hi', name));
};

invokeGreet(greet, 'Bob');

console.log('----------------------------------------');

const beforeAdvice = new Proxy(greet, {
  apply: function(target, thisArg, args) {
    console.log(`target: ${target}`);
    console.log(`thisArg: ${thisArg}`);
    console.log(`args: ${args}`);
    console.log('--------------------');
    const message = args[0];
    const msgInCaps = message[0].toUpperCase() + message.slice(1);
    // Before advice.
    return Reflect.apply(target, thisArg, [msgInCaps, ...args.slice(1)]);
  }
});         

invokeGreet(beforeAdvice, 'Bob');

console.log('----------------------------------------');

const beforeAndAfterAdvice = new Proxy(greet, {
  apply: function(target, thisArg, args) {                       
    console.log(`target: ${target}`);
    console.log(`thisArg: ${thisArg}`);
    console.log(`args: ${args}`);
    console.log('--------------------');
    const newArguments = ['Howdy', ...args.slice(1)];
    // Before advice.
    const result = Reflect.apply(target, thisArg, newArguments);
    // After advice.
    return result.toUpperCase();
  }
});         

invokeGreet(beforeAndAfterAdvice, 'Bob');

console.log('----------------------------------------');

const aroundAdvice = new Proxy(greet, {
  apply: function(target, thisArg, args) {
    console.log(`target: ${target}`);
    console.log(`thisArg: ${thisArg}`);
    console.log(`args: ${args}`);
    console.log('--------------------');
    if(args[1] === 'Doc') {
      // Around (instead-of) advice.
      return "What's up, Doc?";
    }
    else {
      return Reflect.apply(target, thisArg, args);      
    }
  }
});         

invokeGreet(aroundAdvice, 'Bob');

console.log('----------------------------------------');

invokeGreet(aroundAdvice, 'Doc');
