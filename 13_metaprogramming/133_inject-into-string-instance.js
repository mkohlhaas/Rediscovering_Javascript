'use strict';

const text = new String('live');

try {
  text.reverse();
} catch(ex) {
  console.log(ex.message);
}

text.reverse = function() { return this.split('').reverse().join(''); };

console.log(text.reverse());

const anotherText = new String('rats');

try {
  console.log(anotherText.reverse());  
} catch(ex) {
  console.log(ex.message);
}
