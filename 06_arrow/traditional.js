'use strict';

const success = function(value) {
  return { value: value };
};

const blowup = function(value) {
  throw new Error('blowing up with value ' + value);
};

const process = function(successFn, errorFn) {
  const value = Math.round(Math.random() * 100, 2);
  
  if(value > 50) {
    return successFn(value);
  } else {
    return errorFn(value);
  }
};

try {
  console.log(process(success, blowup));  
} catch(ex) {
  console.log(ex.message);
}
