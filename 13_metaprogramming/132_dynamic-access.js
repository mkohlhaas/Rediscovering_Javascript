'use strict';

class Person {
  constructor(age) {
    this.age = age;
  }                
  
  play() { console.log(`The ${this.age} year old is playing`); }
  
  get years() { return this.age; }
}

const sam = new Person(2);

console.log('----------------------------------------');
console.log(sam.age);
sam.play();

console.log('----------------------------------------');
const fieldName = 'age';
const methodName = 'play';

console.log(sam[fieldName]);
sam[methodName]();

console.log('----------------------------------------');
console.log(`Members of sam: ${Object.keys(sam)}`);

console.log('----------------------------------------');
for(const property in sam) {
  console.log(`Property: ${property} value: ${sam[property]}`);
}

console.log('----------------------------------------');
console.log(Object.getOwnPropertyNames(Reflect.getPrototypeOf(sam)));
