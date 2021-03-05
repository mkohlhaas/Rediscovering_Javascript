'use strict';

// When designing a base class, if you like to decide which instance of derived
// class to create, then use the Symbol.species to query for that intent. When writing
// a derived class, if you want to control the type of instance your base class
// will create, refer to the base class’s documentation to see if it provides a way.
class MyArray extends Array {
  static get [Symbol.species]() { 
    return Array; }
}

const concArray = new MyArray().concat(new MyArray());
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
console.log(`instanceof Array?: ${concArray instanceof Array}`);
