'use strict';

class Person {
  constructor(firstName, lastName) {
    console.log('initializing Person fields');
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  toString() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }
  
  get fullName() { return `${this.firstName} ${this.lastName}`; }
}

class ReputablePerson extends Person {
  constructor(firstName, lastName, rating) {
    console.log('creating a ReputablePerson');
    super(firstName, lastName);
    this.rating = rating;
  }

  toString() {
    return `${super.toString()} Rating: ${this.rating}`;
  }      
  
  get fullName() {
    return `Reputed ${this.lastName}, ${super.fullName} `;
  }
}

const printPrototypeHierarchy = function(instance) {
  if(instance !== null) {
    console.log(instance);
    printPrototypeHierarchy(Reflect.getPrototypeOf(instance));
  }
};

const alan = new ReputablePerson('Alan', 'Turing', 5);

printPrototypeHierarchy(alan);

class ComputerWiz {}

Reflect.setPrototypeOf(Reflect.getPrototypeOf(alan), ComputerWiz.prototype);

console.log('...after change of prototype...');                              

printPrototypeHierarchy(alan);

const ada = new ReputablePerson('Ada', 'Lovelace', 5);
printPrototypeHierarchy(ada);
