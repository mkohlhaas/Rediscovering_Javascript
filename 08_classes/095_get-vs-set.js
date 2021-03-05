'use strict';
  
class Counter {} 

Counter.prototype.count = 0;
Counter.prototype.increment = function() { this.count += 1; };

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.count);
console.log(counter2.count);

counter1.increment();
console.log(counter1.count);
console.log(counter2.count);
