'use strict';

class Counter {
  constructor() {
    this.count = 0;
  }                
  
  incrementBy(value) { this.count += value; return this.count; }
  decrementBy(value) { this.count -= value; return this.count; }
}

const call = function(counter, method, ...data) {
  const methodToCall = Reflect.get(counter, method);
  return Reflect.apply(methodToCall, counter, data);
};

const counter = new Counter();

console.log(call(counter, 'incrementBy', 10)); //10
console.log(call(counter, 'decrementBy', 7)); //3
console.log(counter.count); //3
