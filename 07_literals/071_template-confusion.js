'use strict';

let value = 4;

const msg1 = `The value is ${value}`;
const print = () => `The value is ${value}`;
                
value = 0;

console.log(msg1);
console.log(print());
