'use strict';
const name = 'Tom';
const tom = Symbol(name);
const jerry = Symbol('Jerry');
const anotherTom = Symbol(name);

console.log(tom);
console.log(typeof(tom));
console.log(tom === jerry);
console.log(tom === anotherTom);
