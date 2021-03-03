//BROKEN CODE
'use strict';

const sam = Object.freeze({ first: 'Sam', age: 2 });

//sam = {}; //ERROR, the reference sam is immutable

sam.age = 3;

console.log(sam.age);
