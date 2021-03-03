'use strict';

const john = {
  first: 'John',
  last: 'Smith',
  email: 'tst@example.com',
  age: 23,
};

console.log(john);
for(const prop in john) {
  console.log(prop + ' : ' + john[prop]);
}

console.log('----------------------------------------');
const age = Symbol('ageValue');
const email = 'emailValue';

const sam = {
  first: 'Sam',
  [email]: 'sam@example.com',
  [age]: 2
};

console.log('iterating over properties:');
for(const property in sam) {
  console.log(property + ' : ' + sam[property]);
}

console.log('----------------------------------------');
console.log('list of property names:');
console.log(Object.getOwnPropertyNames(sam));

console.log('----------------------------------------');
console.log('list of symbol properties');
console.log(Object.getOwnPropertySymbols(sam));

console.log('----------------------------------------');
console.log('accessing a symbol property:');
console.log(sam[age]);                  

console.log('----------------------------------------');
console.log('changing values...');
sam[age] = 3;
console.log(sam[age]);
sam.ageValue = 4;
console.log(sam);

console.log('----------------------------------------');
sam.emailValue = 'another@example.com';
console.log(sam);

console.log('----------------------------------------');
sam[email] = 'still@example.com';
console.log(sam);
console.log('----------------------------------------');
