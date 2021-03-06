"use strict";

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;         
    this.age = age;
  }
}                                                 

const peter = new Person('Peter', 'Parker', 23);

console.log(peter.toString());
