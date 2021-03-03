'use strict';

const a = 4;
const c = undefined;

console.log(a == null);
console.log(c == null);

console.log(a === null);
console.log(c === null);

console.log(a === undefined);
console.log(c === undefined);

console.log(c === null || c === undefined);
