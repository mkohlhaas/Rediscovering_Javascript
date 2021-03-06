'use strict';

const langs = ['JavaScript', 'Ruby', 'Python', 'Clojure'];

{
  const firstElement = langs[0];
  const lastElement = langs[langs.length - 1]; //eh?
}

console.log(langs.first);
console.log(langs.last);

Object.defineProperties(Array.prototype, {
  first: {
    get: function() { return this[0]; },
    set: function(value) { this[0] = value; }
  },
  last: {
    get: function() { return this[this.length - 1]; },
    set: function(value) { this[Math.max(this.length - 1, 0)] = value; }
  }  
});

const firstElement = langs.first;
const lastElement = langs.last;

console.log(firstElement);
console.log(lastElement);

langs.first = 'Modern JavaScript';
langs.last = 'ClojureScript';

console.log(langs);
