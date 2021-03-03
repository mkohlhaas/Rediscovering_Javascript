'use strict';

const name1 = 'Jack';
const name2 = 'Jill';

console.log('Hello ' + name1 + ' and ' + name2);

console.log(`Hello ${name1} and ${name2}`);

console.log(`Hello ${name1} and $name2`);

const item = 'cake';
console.log(`The kid asked, "how's the ${item}?"`);

const price = 19;
console.log(`The price of a { symbol is $${price * 0.01 }.`);

console.log(`Shout out greetings: ${'hello'.toUpperCase()}`);
