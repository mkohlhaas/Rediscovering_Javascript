'use strict';

console.log(
  [1, 2, 3].map(function(e) { return e * 2; })
);

const factor = 2;
console.log(
  [1, 2, 3].map(function(e) { return e * factor; })
);

this.stuff = 'from lexical scope';
const someValue = 4;
const self = this;

setTimeout(function() {
  console.log('someValue is ' + someValue); //lexical scope for someValue
  console.log('this...' + this.stuff); //dynamic scope for this    
  console.log('self...' + self.stuff); //lexical scope for self
}, 1000);

setTimeout(() => {
  console.log('someValue is ' + someValue); //lexical scope for someValue
  console.log('this...' + this.stuff); //lexical scope for this    
  console.log('self...' + self.stuff); //lexical scope for self
}, 1000);
