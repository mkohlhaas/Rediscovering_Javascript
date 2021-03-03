'use strict';

const printProperties = function(obj) {
  for(const property of Object.getOwnPropertyNames(obj)) {
    console.log(`${property} is ${obj[property]}`);
  }
};

printProperties({language: 'JavaScript', typing: 'dynamic'});
printProperties(
  {tool: 'Redux', language: 'JavaScript', purpose: 'transpiler', });
