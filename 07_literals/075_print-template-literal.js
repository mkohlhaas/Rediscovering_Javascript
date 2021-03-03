'use strict';
const printDetails = function(texts, ...expressions) {
  console.log(texts);
  console.log(expressions);
};                          

const name = 'John';
printDetails`Hello ${name}, how are you?`;
