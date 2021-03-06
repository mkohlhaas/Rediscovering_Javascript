"use strict";

// A decorator is simply an intercepting function that is executed at runtime.
// When JavaScript sees a decorator, it places a call to a function with the
// name of that decorator—for example, a function named Component() when it
// encounters the decorator @Component. That function will then be executed for
// its effects during runtime.

import 'reflect-metadata';

// The implementation of a decorator is simply an interceptor function that in
// turn returns a function - the decorator function - to manipulate the target
// of decoration.
export const Component = function(properties) {
  return function(target) {         
    Reflect.defineMetadata('annotations', properties, target);
    // Finally we return the decorated class from the function. A class
    // decorator always returns the class.
    return target;
  };
};
