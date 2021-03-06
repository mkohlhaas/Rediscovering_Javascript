'use strict';

class Employee {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }                

  get fullname() { return `${this.firstName} ${this.lastName}`; }
  get age() { return new Date().getFullYear() - this.yearOfBirth; }
}                                                          

const printInfo = function(employee) {
  console.log(`First name: ${employee.firstName}`);
  console.log(`Fullname: ${employee.fullname}`);
  console.log(`Age: ${employee.age}`);
};

const john = new Employee('John', 'Doe', 2010);

{
  // A proxy with no handler acts like a dummy, merely forwarding all calls,
  // through Reflect, to its target.
  const handler = {};
  const proxyDoe = new Proxy(john, handler);
  printInfo(proxyDoe);
}

console.log('----------------------------------------');

// Let's create a spy!
{
  // To create a trap to be used when reading an object’s property, provide a
  // get() function in the handler.
  const handler = {
    get: function(target, propertyName, receiver) {
      // if(propertyName === 'firstName') {
      console.log('--------------------');
      console.log(`target is john? ${john === target}`);
      console.log(`propertyName is ${propertyName}`);
      console.log(`receiver is proxyDoe? ${proxyDoe === receiver}`);      
      console.log('--------------------');
      // }
      // Forward the call to the target via Reflect.
      // That is, we’ll manually do what the Proxy does by default if we do not
      // provide a trap.
      return Reflect.get(target, propertyName);
    }
  };
  const proxyDoe = new Proxy(john, handler);
  printInfo(proxyDoe);
}

console.log('----------------------------------------');

// Altering behavior!
{
  const handler = {
    get: function(target, propertyName, ) {
      if(propertyName === 'age') {
        return `It's not polite to ask that question, dear!`;
      }
      return Reflect.get(target, propertyName);
    }
  };
  const proxyDoe = new Proxy(john, handler);
  printInfo(proxyDoe);
}
