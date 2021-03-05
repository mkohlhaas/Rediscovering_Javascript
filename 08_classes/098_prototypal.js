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

console.log('------- Prototype Hierarchy ------------');
printPrototypeHierarchy(alan);

class ComputerWiz {}

Reflect.setPrototypeOf(Reflect.getPrototypeOf(alan), ComputerWiz.prototype);

console.log('------- After change of prototype ------');                              
printPrototypeHierarchy(alan);

console.log('------- New Reputable Person -----------');
const ada = new ReputablePerson('Ada', 'Lovelace', 5);
console.log('------- Prototype Hierarchy ------------');
printPrototypeHierarchy(ada);
// ComputerWiz doesn't have a fullname getter.
console.log('----------------------------------------');
console.log(ada.fullName);
