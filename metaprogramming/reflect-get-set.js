'use strict';

class Person {
  constructor(age) {
    this.age = age;
  }                
  
  play() { console.log(`The ${this.age} year old is playing`); }
  
  get years() { return this.age; }
}

const sam = new Person(2);

const propertyName = 'age';

Reflect.set(sam, propertyName, 3);
console.log(Reflect.get(sam, propertyName));

Reflect.apply(sam.play, sam, []);
Reflect.apply(Person.prototype.play, sam, []);

console.log(Reflect.ownKeys(sam));
console.log(Reflect.has(sam, 'age'));
