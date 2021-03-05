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

class AwesomePerson extends Person {
  get fullName() {
    return `Awesome ${super.fullName}`;
  }
}

// The default constructor thankfully acts as a nice quiet passthrough
// constructor:
const ball = new AwesomePerson('Lucille', 'Ball');
console.log(ball.fullName);
