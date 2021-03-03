'use strict';

const max = 200;
const ok = true;
const nothing = undefined;
const nope = null;           
const sam = { first: 'Sam', age: 2 };

//max = 200; //Not allowed
//ok = true;  //Not allowed     
//nothing = undefined; //Not allowed
//nope = null;  //Not allowed

//sam = { first: 'Sam', age: 2 }; //Not allowed

sam.age = 3;

console.log(sam);

console.log(typeof(max));
console.log(typeof(ok));
console.log(typeof(nothing));
console.log(typeof(nope));
console.log(typeof(sam));
