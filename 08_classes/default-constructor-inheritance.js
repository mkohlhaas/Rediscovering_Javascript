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

class AwesomePerson extends Person {
  get fullName() {
    return `Awesome ${super.fullName}`;
  }
}

const ball = new AwesomePerson('Lucille', 'Ball');
console.log(ball.fullName);
