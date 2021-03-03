'use strict';

class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const concArray = new MyArray().concat(new MyArray());
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
